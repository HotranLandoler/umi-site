"use server";

import VerificationEmail from "@/components/verify-email-template";
import { getUser, lucia } from "@/lib/lucia";
import { resend } from "@/lib/resend-client";
import { cookies } from "next/headers";

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

export async function logout(): Promise<LogoutResult> {
  const { session } = await getUser();
  if (!session) {
    return {
      success: false,
      error: "退出登录失败，请重试",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return {
    success: true,
    error: null,
  };
}

type LogoutResult =
  | {
      success: true;
      error: null;
    }
  | {
      success: false;
      error: string;
    };
