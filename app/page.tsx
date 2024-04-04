import BlogCard from "@/components/blog-card";
import GameCard from "@/components/game-card";
import { GameMeta, fetchFeed, fetchGameMetas } from "@/lib/data";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="mb-12 rounded-[2rem] bg-slate-100 p-12">
      <Hero />
      <OurGames />
      <Feed />
    </div>
  );
}

function Hero() {
  return (
    <section className="mb-16 grid grid-cols-[3fr_1fr] grid-rows-[3fr_1fr] gap-12">
      <div className="flex items-end">
        <h1 className="text-6xl font-bold">欢迎来到UMi数据库主页</h1>
      </div>
      <ul className="row-span-2 grid grid-rows-3 gap-8">
        <li className="min-w-32 rounded-2xl bg-slate-500"></li>
        <li className="min-w-32 rounded-2xl bg-slate-500"></li>
        <li className="min-w-32 rounded-2xl bg-slate-500"></li>
      </ul>
      <div className="flex gap-8">
        <div className="aspect-square min-h-32 rounded-full bg-slate-500"></div>
        <p>
          欢迎来到UMi的网上数据库，这里由UMi的正式成员参与贡献，旨在提供一个集中的高价值信息中介，也许你可以在这里找到很多普通互联网上很难遇到的东西！
        </p>
      </div>
    </section>
  );
}

async function OurGames() {
  const gameMetas = await fetchGameMetas();

  return (
    <section className="mb-16">
      <header className="mb-4 flex items-center gap-8">
        <h2 className="text-2xl font-bold">我们的游戏</h2>
        <Link
          className="rounded-full border-2 border-slate-500 px-4 py-1"
          href="#">
          全部游戏 {"->"}
        </Link>
      </header>
      <div className="grid grid-cols-4 gap-4">
        {gameMetas.map(function renderGameCard(gameMeta: GameMeta) {
          return <GameCard key={gameMeta.name} gameMeta={gameMeta} />;
        })}
      </div>
    </section>
  );
}

async function Feed() {
  const feed = await fetchFeed();

  return (
    <section>
      <header className="mb-4 flex items-center gap-8">
        <h2 className="text-2xl font-bold">最新动态</h2>
      </header>
      <div className="columns-4">
        {feed.map(function renderBlogItem(blogItem) {
          return <BlogCard key={blogItem.id} blogItem={blogItem} />;
        })}
      </div>
    </section>
  );
}
