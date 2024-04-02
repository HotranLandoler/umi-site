import type { GameMeta } from "@/lib/data";
import Image from "next/image";

export default function GameCard({ gameMeta }: { gameMeta: GameMeta }) {
  return (
    <figure className="relative overflow-hidden rounded-lg">
      <Image
        className="w-full bg-slate-200"
        src={gameMeta.imageSrc}
        width={100}
        height={100}
        alt={gameMeta.name}
      />
      {gameMeta.isNew && (
        <div className="absolute -left-1 top-0 rotate-12 bg-yellow-400 px-4 py-2">
          新品
        </div>
      )}
    </figure>
  );
}
