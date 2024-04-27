import { z } from "zod";

export const authFormSchema = z.object({
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

export type AuthFormValidator = z.infer<typeof authFormSchema>;
