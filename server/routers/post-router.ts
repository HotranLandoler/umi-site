import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { prisma } from "@/lib/prisma";
import { TRPCError } from "@trpc/server";
import { postSchema } from "@/lib/schemas/post-schema";
import { $Enums } from "@prisma/client";

export const postRouter = router({
  all: publicProcedure.query(async function queryAllPosts() {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: { name: true },
        },
        tags: {
          select: { name: true },
        },
      },
    });
    return posts;
  }),
  byId: publicProcedure.input(z.number()).query(async function findPostById({
    input: id,
  }) {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    return post;
  }),
  create: publicProcedure.input(postSchema).mutation(async function createPost({
    input,
  }) {
    const { id: postId } = await prisma.post.create({
      data: {
        ...input,
        category: $Enums.Category.GAMEREC,
      },
    });

    return { success: true, postId };
  }),
});
