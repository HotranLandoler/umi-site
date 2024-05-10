import { getPostById } from "@/data/post-data";
import { notFound } from "next/navigation";

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
      <p>{post.content}</p>
    </article>
  );
}
