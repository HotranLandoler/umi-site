"use client";

import { ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { likePost } from "@/server/actions/post-actions";

type Props = {
  postId: number;
  initialLikes: number;
};

export default function LikeButton({ postId, initialLikes }: Props) {
  return (
    <div className="flex items-center">
      <Button
        variant="ghost"
        className="h-16 w-16 p-4"
        onClick={handleClickLike}>
        <ThumbsUp />
      </Button>
      {initialLikes}
    </div>
  );

  async function handleClickLike() {
    await likePost(postId);
  }
}
