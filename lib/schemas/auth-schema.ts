import { z } from "zod";

export const signUpFormSchema = z.object({
  username: z.string().min(1, {
    message: "用户名为必填项",
  }),
  email: z.string().email({
    message: "邮箱地址无效",
  }),
  password: z.string().min(8, {
    message: "密码过短，长度应至少为8位",
  }),
});

export const loginFormSchema = z.object({
  email: z.string().email({
    message: "请输入正确的邮箱地址",
  }),
  password: z.string().min(1, {
    message: "密码不可为空",
  }),
});

export type SignUpFormValidator = z.infer<typeof signUpFormSchema>;
export type LoginFormValidator = z.infer<typeof loginFormSchema>;
