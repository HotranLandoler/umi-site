import path from "node:path";

import type { GameMeta } from "./interfaces";
import { getMDXData } from "./mdx-parser";

export function getAllGames() {
  const dir = path.join(process.cwd(), "app", "(main)", "games", "pages");
  return getMDXData<GameMeta>(dir).sort(function sortByReleaseDate(a, b) {
    if (new Date(a.metadata.releaseDate) > new Date(b.metadata.releaseDate)) {
      return -1;
    }
    return 1;
  });
}
