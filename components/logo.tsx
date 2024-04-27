import Link from "next/link";
import Image from "next/image";

import logo from "@/app/icon.svg";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("block", className)}>
      <Image
        className="mx-auto w-full rounded-full bg-slate-500 text-white"
        src={logo}
        priority={true}
        alt="UMi游研社Logo，黑色的背景上有小熊星座的六颗白星"
      />
    </Link>
  );
}
