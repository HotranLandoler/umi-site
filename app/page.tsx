import Hero from "@/components/layout/hero";
import BlogCard from "@/components/blog-card";
import { fetchFeed, getAllGames } from "@/lib/data";
import Link from "next/link";
import Games from "@/components/games/games";
import RightArrow from "@/components/icons/right-arrow";

export default async function Home() {
  return (
    <>
      <Hero />
      <OurGames />
      <Feed />
    </>
  );
}

async function OurGames() {
  const showGamesCount = 8;
  const games = getAllGames().slice(0, showGamesCount);

  return (
    <section id="umi-games" className="mb-16">
      <header className="mb-8 flex items-center gap-8">
        <h2 className="text-3xl font-bold">UMi的游戏</h2>
        <Link
          className="button button-outline group/button flex px-4 py-1"
          href="/games">
          全部游戏
          <RightArrow />
        </Link>
      </header>
      <Games games={games} />
    </section>
  );
}

async function Feed() {
  const feed = await fetchFeed();

  return (
    <section id="feed">
      <header className="mb-8 flex items-center gap-8">
        <h2 className="text-3xl font-bold">最新动态</h2>
      </header>
      <div className="columns-4">
        {feed.map(function renderBlogItem(blogItem) {
          return <BlogCard key={blogItem.id} blogItem={blogItem} />;
        })}
      </div>
    </section>
  );
}
