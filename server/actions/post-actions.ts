"use server";

import { auth } from "@/auth";
import { ActionResult } from "@/lib/interfaces";
import { prisma } from "@/lib/prisma";
import { postSchema, PostFormValidator } from "@/lib/schemas/post-schema";
import { redirect } from "next/navigation";

export async function createPost(
  data: PostFormValidator,
): Promise<ActionResult> {
  const session = await auth();
  if (!session?.user || !session.user.id) {
    return { success: false, error: "需要登录才能发表分享" };
  }

  const validatedFields = postSchema.safeParse(data);
  if (!validatedFields.success) {
    return { success: false, error: "输入数据无效！" };
  }

  const { id: postId } = await prisma.post.create({
    data: {
      ...validatedFields.data,
      authorId: session.user.id,
    },
  });

  redirect(`/posts/${postId}`);
}
