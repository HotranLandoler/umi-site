import PostCard from "@/components/posts/post-card";

import { HeartCrack } from "lucide-react";
import AddPostLink from "./add-post-link";
import { getAllPosts } from "@/data/post-data";

export default async function LatestPosts() {
  const posts = await getAllPosts();

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center">
        <HeartCrack className="mx-auto mb-2 size-12 text-muted-foreground" />
        <p className="mb-4 text-muted-foreground">还没有内容哦...</p>
        <AddPostLink label="发表第一条分享" />
      </div>
    );
  }

  return (
    <div className="columns-4 lg:columns-3 sm:columns-2">
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
}
