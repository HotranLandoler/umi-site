import PostCard from "@/components/posts/post-card";

import { prisma } from "@/lib/prisma";

export default async function LatestPosts() {
  const feed = await prisma.post.findMany({
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

  return (
    <div className="columns-4 sm:columns-2 lg:columns-3">
      {feed.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
