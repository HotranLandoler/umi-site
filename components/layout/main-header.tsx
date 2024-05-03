import Link from "next/link";
import { Suspense } from "react";

import Search from "../search";
import Logo from "../logo";
import { buttonVariants } from "../ui/button";
import ThemeToggle from "../theme-toggle";
import RoundedCornerImage from "../rounded-corner";

export default function MainHeader() {
  return (
    <div className="sticky top-0 z-10 bg-background py-4">
      <header className="flex justify-between rounded-full bg-muted/50 px-12 py-4 md:px-8">
        <div className="hidden items-center gap-2 md:flex">
          <Logo className="w-12" />
          <p className="text-xl font-bold">UMi游研社</p>
        </div>
        <Suspense>
          <Search />
        </Suspense>
        <ActionButtons />
      </header>
      <RoundedCornerImage className="-bottom-[35px] left-0 rotate-90" />
      <RoundedCornerImage className="-bottom-[35px] right-0 rotate-180" />
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="flex items-center gap-4 sm:hidden">
      <ThemeToggle />
      <div className="flex items-center gap-2 sm:hidden">
        <Link href="#" className={buttonVariants({ variant: "secondary" })}>
          登录
        </Link>
        <Link href="/signup" className={buttonVariants()}>
          注册
        </Link>
      </div>
    </div>
  );
}
