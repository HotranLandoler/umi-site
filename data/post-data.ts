import { prisma } from "@/lib/prisma";
import type { Category } from "@prisma/client";

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

export async function getPostsByCategory(category: Category) {
  const posts = await prisma.post.findMany({
    where: {
      category: category,
    },
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
