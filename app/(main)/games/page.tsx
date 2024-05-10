import Games from "@/components/games/games";
import { getAllGames } from "@/lib/mdx-data";
import type { Metadata } from "next";

const description = "由UMi成员创作的独立游戏作品展示区！";

export const metadata: Metadata = {
  title: "UMi的游戏",
  description: description,
};

export default function Page() {
  const allGames = getAllGames();
  return (
    <div className="main-container">
      <header className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">UMi的游戏</h1>
        <p>{description}</p>
      </header>
      <Games games={allGames} />
    </div>
  );
}
