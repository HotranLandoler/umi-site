import { notFound } from "next/navigation";

import { getPostsByCategory } from "@/data/post-data";
import { umiDbSections } from "@/data/site-data";
import Posts from "@/components/posts/posts";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const targetSection = umiDbSections.find(function matchSlug(section) {
    return section.slug === slug;
  });
  if (!targetSection) {
    notFound();
  }

  const posts = await getPostsByCategory(targetSection.key);

  return (
    <div className="main-container">
      <header className="mb-8">
        <h1 className="page-heading">{targetSection.name}</h1>
        <p>{targetSection.desc}</p>
      </header>
      <Posts posts={posts} />
    </div>
  );
}
