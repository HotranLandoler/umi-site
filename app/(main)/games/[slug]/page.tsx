import { notFound } from "next/navigation";
import { getAllGames } from "@/lib/mdx-data";
import { baseUrl } from "@/app/sitemap";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PropsWithChildren } from "react";

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
      <header className="mb-8">
        <div className="grid min-h-72 grid-cols-2 grid-rows-8">
          <div
            className="col-start-1 col-end-3 row-start-1 row-end-8 rounded-lg bg-cover bg-fixed bg-center"
            style={{ backgroundImage: `url('${game.metadata.bannerImage}')` }}>
            <div className="grid h-full grid-cols-[auto_1fr] items-end gap-8 p-8 backdrop-blur-lg">
              <div className="-z-10 rounded-lg bg-white/40 p-4">
                <h1 className="mb-4 text-3xl font-bold text-black">
                  {game.metadata.title}
                </h1>
                <p>{game.metadata.excerpt}</p>
              </div>
            </div>
          </div>
          <Image
            className="z-[1] col-start-2 row-start-2 row-end-9 rounded-2xl"
            src={game.metadata.coverImage}
            width={315}
            height={250}
            alt={`Image for game ${game.metadata.title}`}
          />
        </div>
        <dl className="main-container grid grid-cols-2 gap-x-8 gap-y-4">
          <div className="border-b-2 pb-2">
            <MetaTitle>发布日期</MetaTitle>
            <dd>{game.metadata.releaseDate}</dd>
          </div>
          <div className="row-span-2">
            <MetaTitle>开发团队</MetaTitle>
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
          </div>
          <div>
            <MetaTitle>试玩/下载链接</MetaTitle>
            <dd>
              <a
                className="text-primary underline"
                href={game.metadata.link}
                target="_blank"
                rel="noopener noreferer">
                {game.metadata.link}
              </a>
            </dd>
          </div>
        </dl>
      </header>

      <div className="main-container pt-0">
        <MDXRemote source={game.content} />
      </div>
    </article>
  );
}

function MetaTitle({ children }: PropsWithChildren) {
  return <dt className="mb-2 font-bold">{children}</dt>;
}
