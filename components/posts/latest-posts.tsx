"use client";

import PostCard from "@/components/posts/post-card";

import { trpc } from "@/lib/trpc-client";

export default function LatestPosts() {
  const [posts] = trpc.post.all.useSuspenseQuery();

  return (
    <div className="columns-4 lg:columns-3 sm:columns-2">
      {posts && posts.map((post) => <PostCard key={post.id} {...post} />)}
    </div>
  );
}
