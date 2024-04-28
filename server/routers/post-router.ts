import { publicProcedure, router } from "../trpc";
import { prisma } from "@/lib/prisma";

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
    // TODO Mock up
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return posts;
  }),
});
