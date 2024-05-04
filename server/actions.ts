"use server";

import VerificationEmail from "@/components/verify-email-template";
import { resend } from "@/lib/resend-client";

export async function sendVerificationEmail(targetEmail: string, code: string) {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [targetEmail],
      subject: "UMi游研社-社区注册验证",
      react: VerificationEmail({ verificationCode: code }),
    });

    return {
      success: true,
      error: response.error,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}
