import Link from "next/link";
import Search from "../search";
import { Suspense } from "react";

export default function MainHeader() {
  return (
    <header className="sticky top-4 mb-4 flex rounded-full bg-slate-100 px-12 py-4">
      <Suspense>
        <Search />
      </Suspense>
      <LoginButtons />
    </header>
  );
}

function LoginButtons() {
  return (
    <div className="ml-auto flex items-center gap-2">
      <Link
        href="#"
        className="block rounded-full border-2 border-slate-500 px-6 py-2 transition-opacity hover:opacity-50">
        登录
      </Link>
      <Link
        href="#"
        className="block rounded-full border-2 bg-slate-500 px-6 py-2 text-white transition-opacity hover:opacity-50">
        注册
      </Link>
    </div>
  );
}
