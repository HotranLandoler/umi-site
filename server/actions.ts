"use server";

import VerificationEmail from "@/components/verify-email-template";
import { resend } from "@/lib/resend-client";

export async function sendVerificationEmail(targetEmail: string) {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [targetEmail],
      subject: "UMi游研社-社区注册验证",
      react: VerificationEmail({ verificationCode: "123456" }),
    });

    return Response.json(response.data);
  } catch (error) {
    return Response.json({ error });
  }
}
