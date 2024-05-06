import { z } from "zod";

export const postSchema = z.object({
  authorId: z.string(),
  title: z.string().min(1, {
    message: "标题不可为空",
  }),
  category: z.string(),
  content: z.string(),
});

export type PostFormValidator = z.infer<typeof postSchema>;
