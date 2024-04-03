import type { GameMeta } from "@/lib/data";
import Image from "next/image";

export default function GameCard({ gameMeta }: { gameMeta: GameMeta }) {
  return (
    <figure className="relative overflow-hidden rounded-lg">
      <Image
        className="h-full w-full bg-slate-200 object-cover"
        src={
          gameMeta.imageSrc != ""
            ? gameMeta.imageSrc
            : "/examples/IntoSoil.webp"
        }
        width={300}
        height={300}
        alt={gameMeta.name}
      />
      {gameMeta.isNew && (
        <div className="absolute -left-1 top-0 bg-yellow-400 px-4 py-2">
          新品
        </div>
      )}
    </figure>
  );
}
