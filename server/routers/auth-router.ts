import { TRPCError } from "@trpc/server";
import { hash } from "argon2";

import { authFormSchema } from "@/lib/auth-schema";
import { publicProcedure, router } from "../trpc";
import { prisma } from "@/lib/prisma";
import { sendVerificationEmail } from "../actions";
import { generateOTP } from "@/lib/utils";
import { z } from "zod";

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

      const passwordHash = await hash(input.password);

      await prisma.user.create({
        data: {
          name: input.username,
          email: input.email,
          password: passwordHash,
        },
      });

      const verificationCode = generateOTP();
      const sendEmailResult = await sendVerificationEmail(
        input.email,
        verificationCode,
      );

      return { success: true, sendToEmail: input.email };
    }),
  verifyEmail: publicProcedure
    .input(z.string())
    .mutation(async function verifyEmail({ input }) {}),
});
