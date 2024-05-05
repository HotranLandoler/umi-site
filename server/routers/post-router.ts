import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { prisma } from "@/lib/prisma";
import { TRPCError } from "@trpc/server";

export const postRouter = router({
  all: publicProcedure.query(async function queryAllPosts() {
    const posts = await prisma.post.findMany({
      where: { published: true },
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
});
