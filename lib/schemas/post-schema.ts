import { Category } from "@prisma/client";
import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(1, {
    message: "标题不可为空",
  }),
  category: z.nativeEnum(Category),
  content: z.string(),
});

export type PostFormValidator = z.infer<typeof postSchema>;
