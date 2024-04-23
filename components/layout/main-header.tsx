import Link from "next/link";
import Search from "../search";
import { Suspense } from "react";

export default function MainHeader() {
  return (
    <div className="sticky top-0 z-10 bg-white pt-4">
      <header className="mb-4 flex rounded-full bg-slate-100 px-12 py-4">
        <Suspense>
          <Search />
        </Suspense>
        <LoginButtons />
      </header>
      <RoundedCornerImage className="left-0 rotate-90" />
      <RoundedCornerImage className="right-0 rotate-180" />
    </div>
  );
}

function LoginButtons() {
  return (
    <div className="ml-auto flex items-center gap-2">
      <Link href="#" className="button button-outline px-6 py-2">
        登录
      </Link>
      <Link href="#" className="button button-primary px-6 py-2">
        注册
      </Link>
    </div>
  );
}

function RoundedCornerImage({ className }: { className: string }) {
  return (
    <svg
      className={`absolute text-white ${className}`}
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
