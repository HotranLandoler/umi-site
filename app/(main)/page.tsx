import Link from "next/link";
import { Suspense } from "react";

import Hero from "@/components/layout/hero";
import Games from "@/components/games/games";
import RightArrow from "@/components/icons/right-arrow";
import LatestPosts from "@/components/posts/latest-posts";

import { getAllGames } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
          className={cn(
            "group/button",
            buttonVariants({ variant: "secondary" }),
          )}
          href="/games">
          全部游戏
          <RightArrow />
        </Link>
      </header>
      <Games games={games} />
    </section>
  );
}

function Feed() {
  return (
    <section id="feed">
      <header className="mb-8 flex items-center gap-8">
        <h2 className="text-3xl font-bold">最新动态</h2>
      </header>
      <Suspense fallback={<p>loading...</p>}>
        <LatestPosts />
      </Suspense>
    </section>
  );
}
