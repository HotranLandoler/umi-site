import { notFound } from "next/navigation";
import { getAllGames } from "@/lib/mdx-data";
import { baseUrl } from "@/app/sitemap";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
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
      <header className="mb-8 grid grid-cols-[2fr_3fr] gap-8">
        <div>
          <h1 className="mb-4 text-3xl font-bold">{game.metadata.title}</h1>
          <p className="mb-8">{game.metadata.excerpt}</p>
          <dl className="grid grid-cols-2">
            <dt>发布日期</dt>
            <dd>{game.metadata.releaseDate}</dd>
            <dt>开发团队</dt>
            <dd>
              <ul>
                {game.metadata.authors.map(function renderAuthor(author) {
                  return (
                    <li
                      key={author.name}>{`${author.name}：${author.role}`}</li>
                  );
                })}
              </ul>
            </dd>
            <dt>试玩/下载链接</dt>
            <dd>
              <a
                className="text-slate-700 underline"
                href={game.metadata.link}
                target="_blank"
                rel="noopener noreferer">
                {game.metadata.link}
              </a>
            </dd>
          </dl>
        </div>
        <Image
          className="w-full rounded-2xl"
          src={game.metadata.bannerImage}
          width={1280}
          height={720}
          alt={`Image for game ${game.metadata.title}`}
        />
      </header>
      <MDXRemote source={game.content} />
    </article>
  );
}
