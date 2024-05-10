import { prisma } from "@/lib/prisma";

export async function getAllPosts() {
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
}

export async function getPostById(id: number) {
  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });
  return post;
}
