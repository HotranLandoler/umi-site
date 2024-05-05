"use client";

import { notFound } from "next/navigation";

import { trpc } from "@/lib/trpc-client";

type Props = {
  params: {
    id: string;
  };
};

export default function PostPage({ params: { id } }: Props) {
  const [post] = trpc.post.byId.useSuspenseQuery(Number(id));

  if (!post) {
    notFound();
  }

  return (
    <article>
      <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
