import { notFound } from "next/navigation";
import { getAllGames } from "@/lib/data";
import { baseUrl } from "@/app/sitemap";

type Props = {
  params: {
    slug: string;
  };
};

// TODO
export const runtime = "edge";

export async function generateStaticParams() {
  let games = getAllGames();

  return games.map(function getSlug(game) {
    return {
      slug: game.slug,
    };
  });
}

export function generateMetadata({ params }: Props) {
  let game = getAllGames().find(function matchSlug(game) {
    return game.slug === params.slug;
  });
  if (!game) {
    return;
  }

  let {
    title,
    releaseDate: publishedTime,
    excerpt: description,
    ogImage,
  } = game.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/games/${game.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  let games = getAllGames();
  let game = games.find((game) => game.slug === params.slug);

  if (!game) {
    notFound();
  }

  return (
    <article>
      <h1 className="text-3xl font-bold">{game.metadata.title}</h1>
      <p>{game.content}</p>
    </article>
  );
}
