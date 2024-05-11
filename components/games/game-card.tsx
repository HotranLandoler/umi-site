import type { GameMeta } from "@/lib/interfaces";
import Image from "next/image";
import Link from "next/link";

type Props = {
  gameMeta: GameMeta;
  slug: string;
};

export default function GameCard({ gameMeta, slug }: Props) {
  return (
    <Link
      className="relative overflow-hidden rounded-lg transition-opacity hover:opacity-60"
      href={`/games/${slug}`}
      title={gameMeta.title}>
      <Image
        className="w-full bg-slate-200"
        src={gameMeta.coverImage}
        width={315}
        height={250}
        alt={`游戏${gameMeta.title}的封面`}
      />
      {isNew(gameMeta.releaseDate) && <div className="ribbon">新品</div>}
    </Link>
  );
}

function isNew(date: string): boolean {
  const millisecondsPerYear = 1000 * 3600 * 24 * 365;

  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let differenceInTime = currentDate.getTime() - targetDate.getTime();
  let differenceInYear = differenceInTime / millisecondsPerYear;

  return differenceInYear <= 0.5;
}
