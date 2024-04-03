import Image from "next/image";
import SocialLinks from "../social-links";
import Link from "next/link";

import logo from "@/app/icon.svg";

export default function SideBar() {
  return (
    <div className="sticky top-0 row-span-2 self-start p-16 pl-28">
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
          className="mx-auto mb-2 h-auto w-full rounded-full bg-slate-500 text-white"
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
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        <li>
          <NavLink href="#">首页</NavLink>
        </li>
        <SplitLine />
        <li>
          <NavLink href="#">游戏库</NavLink>
        </li>
        <li>
          <NavLink href="#">知识库</NavLink>
        </li>
        <li>
          <NavLink href="#">工具资源库</NavLink>
        </li>
        <li>
          <NavLink href="#">岁月史书</NavLink>
        </li>
        <SplitLine />
        <li>
          <NavLink href="#">UMi的游戏</NavLink>
        </li>
        <li>
          <NavLink href="#">关于我们</NavLink>
        </li>
      </ul>
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">
      {children}
    </Link>
  );
}

function SplitLine() {
  return (
    <li>
      <hr className="w-full border border-slate-300" aria-hidden />
    </li>
  );
}
