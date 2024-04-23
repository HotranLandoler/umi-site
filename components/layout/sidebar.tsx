import Image from "next/image";
import Link from "next/link";

import SocialLinks from "../social-links";
import Nav from "../nav";

import logo from "@/app/icon.svg";
import { umiDbSections } from "@/lib/data";

export default function SideBar() {
  return (
    <div className="sticky top-4 row-span-2 max-h-screen self-start">
      <div className="mx-auto max-w-32">
        <Header />
        <Nav umiDbSections={umiDbSections} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="mb-8 text-center">
      <Link href="/">
        <Image
          className="mx-auto mb-2 w-full rounded-full bg-slate-500 text-white"
          src={logo}
          alt="黑色的背景上有小熊星座的六颗白星"
        />
        <h2 className="mb-2 text-2xl font-bold">UMi游研社</h2>
      </Link>
      <SocialLinks />
    </header>
  );
}
