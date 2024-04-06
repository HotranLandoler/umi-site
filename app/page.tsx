import Hero from "@/components/layout/hero";
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
