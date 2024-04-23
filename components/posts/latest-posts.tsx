import BlogCard from "@/components/blog-card";

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
    <div className="columns-4">
      {feed.map(function renderBlogItem(post) {
        return <BlogCard key={post.id} {...post} />;
      })}
    </div>
  );
}
