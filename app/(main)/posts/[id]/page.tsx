import { notFound } from "next/navigation";

import { getPostById } from "@/data/post-data";
import TipTapRenderer from "@/components/posts/tiptap-renderer";
import { JSONContent } from "@tiptap/react";

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
    </article>
  );
}
