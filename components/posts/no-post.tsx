import { HeartCrack } from "lucide-react";
import AddPostLink from "./add-post-link";

export default function NoPost() {
  return (
    <div className="text-center">
      <HeartCrack className="mx-auto mb-2 size-12 text-muted-foreground" />
      <p className="mb-4 text-muted-foreground">还没有内容哦...</p>
      <AddPostLink label="发表第一条分享" />
    </div>
  );
}
