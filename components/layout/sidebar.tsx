import Image from "next/image";
import SocialLinks from "../social-links";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="row-span-2 p-16 pl-28">
      <Header />
      <Nav />
    </div>
  );
}

function Header() {
  return (
    <header className="mb-8 text-center">
      <Image
        className="mx-auto mb-2 h-auto w-full rounded-full bg-slate-500"
        src=""
        width={100}
        height={100}
        alt="黑色的背景上有小熊星座的六颗白星"
      />
      <h2 className="mb-2 text-2xl font-bold">UMi游研社</h2>
      <SocialLinks />
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <li className="font-bold">
          <NavLink href="#">UMi数据库</NavLink>
        </li>
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
        <li className="font-bold">
          <NavLink href="#">UMi的游戏</NavLink>
        </li>
        <li className="font-bold">
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
