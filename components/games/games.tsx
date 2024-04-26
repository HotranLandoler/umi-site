import type { GameMeta } from "@/lib/interfaces";
import GameCard from "./game-card";

type Props = {
  games: {
    metadata: GameMeta;
    slug: string;
  }[];
};

export default function Games({ games }: Props) {
  return (
    <div className="grid grid-cols-4 gap-4 sm:grid-cols-3">
      {games.map(function renderGameCard(game) {
        return (
          <GameCard key={game.slug} gameMeta={game.metadata} slug={game.slug} />
        );
      })}
    </div>
  );
}
