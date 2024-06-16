import { notFound } from "next/navigation";
import { JSONContent } from "@tiptap/react";

import { getPostById } from "@/data/post-data";
import TipTapRenderer from "@/components/posts/tiptap-renderer";
import LikeButton from "@/components/posts/like-button";

type Props = {
  params: {
    id: string;
  };
};

export default async function PostPage({ params: { id } }: Props) {
  if (Number.isNaN(Number(id))) {
    notFound();
  }

  const post = await getPostById(Number(id));

  if (!post) {
    notFound();
  }

  return (
    <article className="main-container">
      <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
      <TipTapRenderer content={post.content as JSONContent} />
      <footer className="mt-8 border-t-2 border-muted">
        {/* <LikeButton postId={post.id} initialLikes={post._count.likes} /> */}
      </footer>
    </article>
  );
}
