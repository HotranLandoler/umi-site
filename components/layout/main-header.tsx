import Link from "next/link";
import Search from "../search";
import { Suspense } from "react";
import Logo from "../logo";
import { buttonVariants } from "../ui/button";

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
        <AuthButtons />
      </header>
      <RoundedCornerImage className="left-0 rotate-90" />
      <RoundedCornerImage className="right-0 rotate-180" />
    </div>
  );
}

function AuthButtons() {
  return (
    <div className="flex items-center gap-2 sm:hidden">
      <Link href="#" className={buttonVariants({ variant: "secondary" })}>
        登录
      </Link>
      <Link href="/signup" className={buttonVariants()}>
        注册
      </Link>
    </div>
  );
}

function RoundedCornerImage({ className }: { className: string }) {
  return (
    <svg
      className={`absolute -bottom-[35px] text-white ${className}`}
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V35L35 35C15.6701 35 0 19.33 0 0Z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="35" height="35" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
