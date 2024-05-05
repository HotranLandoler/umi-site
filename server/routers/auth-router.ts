import { TRPCError } from "@trpc/server";
import { hash, verify } from "argon2";
import { cookies } from "next/headers";

import { loginFormSchema, signUpFormSchema } from "@/lib/auth-schema";
import { publicProcedure, router } from "../trpc";
import { prisma } from "@/lib/prisma";
import { sendVerificationEmail } from "../actions";
import { generateOTP } from "@/lib/utils";
import { z } from "zod";
import { lucia } from "@/lib/lucia";
import { generateIdFromEntropySize } from "lucia";
import { argon2Setting } from "@/lib/data";

export const authRouter = router({
  createUser: publicProcedure
    .input(signUpFormSchema)
    .mutation(async function createUser({ input }) {
      const confictUser = await prisma.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (confictUser) {
        throw new TRPCError({ code: "CONFLICT" });
      }

      const passwordHash = await hash(input.password, argon2Setting);
      const userId = generateIdFromEntropySize(10);

      await prisma.user.create({
        data: {
          id: userId,
          name: input.username,
          email: input.email,
          password: passwordHash,
        },
      });

      const verificationCode = generateOTP();
      // const sendEmailResult = await sendVerificationEmail(
      //   input.email,
      //   verificationCode,
      // );

      const session = await lucia.createSession(userId, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      );

      return { success: true, sendToEmail: input.email };
    }),
  login: publicProcedure.input(loginFormSchema).mutation(async function login({
    input,
  }) {
    const user = await prisma.user.findUnique({
      where: {
        email: input.email,
      },
      select: {
        id: true,
        password: true,
      },
    });
    if (!user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    const matchPassword = await verify(user.password, input.password);
    if (!matchPassword) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
    return {
      success: true,
    };
  }),
  verifyEmail: publicProcedure
    .input(z.string())
    .mutation(async function verifyEmail({ input }) {}),
});
