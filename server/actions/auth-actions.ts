"use server";

import { hash } from "argon2";
import { AuthError } from "next-auth";

import {
  loginFormSchema,
  LoginFormValidator,
  signUpFormSchema,
  SignUpFormValidator,
} from "@/lib/schemas/auth-schema";
import { argon2Setting } from "@/lib/data";
import { prisma } from "@/lib/prisma";
import { signIn, signOut } from "@/auth";
import type { ActionResult } from "@/lib/interfaces";

export async function signUp(
  values: SignUpFormValidator,
): Promise<ActionResult> {
  const validatedFields = signUpFormSchema.safeParse(values);
  if (!validatedFields.success) {
    return { success: false, error: "输入数据无效！" };
  }

  const { username, email, password } = validatedFields.data;

  const confictUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (confictUser) {
    return { success: false, error: "该邮箱已被使用，试试登录？" };
  }

  const passwordHash = await hash(password, argon2Setting);

  await prisma.user.create({
    data: {
      name: username,
      email: email,
      password: passwordHash,
    },
  });

  return { success: true };
}

export async function login(values: LoginFormValidator): Promise<ActionResult> {
  const validatedFields = loginFormSchema.safeParse(values);
  if (!validatedFields.success) {
    return { success: false, error: "用户名或密码错误！" };
  }

  const { email, password } = validatedFields.data;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return { success: false, error: "用户名或密码错误！" };
      } else {
        return { success: false, error: "出现了未知问题，请再试一次" };
      }
    }

    throw error;
  }
}

export async function logout() {
  await signOut();
}
