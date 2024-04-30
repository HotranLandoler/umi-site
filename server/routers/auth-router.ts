import { TRPCError } from "@trpc/server";
import { hash } from "argon2";

import { authFormSchema } from "@/lib/auth-schema";
import { publicProcedure, router } from "../trpc";
import { prisma } from "@/lib/prisma";
import { sendVerificationEmail } from "../actions";

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

      const sendEmailResult = await sendVerificationEmail(input.email);
      if (!sendEmailResult.ok) {
        throw new Error(await sendEmailResult.text());
      }
      console.log(sendEmailResult);

      return { success: true, sendToEmail: input.email };
    }),
});
