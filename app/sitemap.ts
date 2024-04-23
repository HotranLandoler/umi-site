import { getAllGames } from "@/lib/data";

export const baseUrl = "https://umi-games.com";

export default async function sitemap() {
  let now = new Date().toISOString().split("T")[0];

  let games = getAllGames().map((game) => ({
    url: `${baseUrl}/games/${game.slug}`,
    lastModified: now,
  }));

  let routes = ["", "/games"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
  }));

  return [...routes, ...games];
}
