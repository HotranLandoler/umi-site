"use client";

import PostCard from "@/components/posts/post-card";

import { trpc } from "@/lib/trpc-client";

export default function LatestPosts() {
  const [posts] = trpc.post.all.useSuspenseQuery();

  return (
    <div className="columns-4 sm:columns-2 lg:columns-3">
      {posts && posts.map((post) => <PostCard key={post.id} {...post} />)}
    </div>
  );
}
