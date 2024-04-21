"use client";

import Image from "next/image";
import SocialLinks from "../social-links";
import Link from "next/link";

import logo from "@/app/icon.svg";
import { usePathname } from "next/navigation";
import { styleOnCondition } from "@/lib/utils";

export default function SideBar() {
  return (
    <div className="sticky top-0 row-span-2 self-start p-16">
      <Header />
      <Nav />
    </div>
  );
}

function Header() {
  return (
    <header className="mb-8 text-center">
      <Link href="/">
        <Image
          className="mx-auto mb-2 h-auto max-w-32 rounded-full bg-slate-500 text-white"
          src={logo}
          alt="黑色的背景上有小熊星座的六颗白星"
        />
        <h2 className="mb-2 text-2xl font-bold">UMi游研社</h2>
      </Link>
      <SocialLinks />
    </header>
  );
}

function Nav() {
  const pathName = usePathname();

  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <NavLink href="/">首页</NavLink>
        <SplitLine />
        <NavLink href="#">游戏库</NavLink>
        <NavLink href="#">知识库</NavLink>
        <NavLink href="#">工具资源库</NavLink>
        <NavLink href="#">岁月史书</NavLink>
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
          className={`block rounded-lg px-4 py-2 ${styleOnCondition("bg-slate-200", pathName === href)} ${styleOnCondition("hover:bg-slate-100", pathName !== href)}`}>
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
