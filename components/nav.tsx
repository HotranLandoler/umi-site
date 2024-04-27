"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { PageData } from "@/lib/data";
import Link from "next/link";

type Props = {
  umiDbSections: PageData[];
};

export default function Nav({ umiDbSections }: Props) {
  const pathName = usePathname();

  return (
    <nav>
      <ul className="flex flex-col gap-1">
        <NavLink href="/">首页</NavLink>
        <SplitLine />
        {umiDbSections.map(function renderSectionLink(section) {
          return (
            <NavLink key={section.name} href={section.href}>
              {section.name}
            </NavLink>
          );
        })}
        <SplitLine />
        <NavLink href="/games">UMi的游戏</NavLink>
        <NavLink href="#">关于我们</NavLink>
      </ul>
    </nav>
  );

  function NavLink({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) {
    return (
      <li>
        <Link
          href={href}
          className={cn(
            "block rounded-lg px-4 py-2",
            { "bg-accent text-accent-foreground": pathName === href },
            {
              "hover:bg-accent/60": pathName !== href,
            },
          )}>
          {children}
        </Link>
      </li>
    );
  }
}

function SplitLine() {
  return (
    <li>
      <hr className="w-full border border-slate-100" aria-hidden />
    </li>
  );
}
