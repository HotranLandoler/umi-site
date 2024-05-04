import { TRPCError } from "@trpc/server";
import { hash } from "argon2";

import { authFormSchema } from "@/lib/auth-schema";
import { publicProcedure, router } from "../trpc";
import { prisma } from "@/lib/prisma";
import { sendVerificationEmail } from "../actions";
import { generateOTP } from "@/lib/utils";
import { z } from "zod";
import { lucia } from "@/lib/lucia";
import { generateIdFromEntropySize } from "lucia";
import { cookies } from "next/headers";

export const authRouter = router({
  createUser: publicProcedure
    .input(authFormSchema)
    .mutation(async function createUser({ input }) {
      const confictUser = await prisma.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (confictUser) {
        throw new TRPCError({ code: "CONFLICT" });
      }

      const passwordHash = await hash(input.password, {
        // recommended minimum parameters
        memoryCost: 19456,
        timeCost: 2,
        hashLength: 32,
        parallelism: 1,
      });
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
  verifyEmail: publicProcedure
    .input(z.string())
    .mutation(async function verifyEmail({ input }) {}),
});
