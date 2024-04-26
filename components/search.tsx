"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const PARAM_KEY_QUERY = "query";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  return (
    <div className="relative flex sm:hidden">
      <label htmlFor="search" className="sr-only">
        搜索
      </label>
      <input
        id="search"
        type="text"
        placeholder="搜索内容..."
        onChange={function onInputChange(event) {
          handleSearch(event.target.value);
        }}
        autoComplete="off"
        defaultValue={searchParams.get(PARAM_KEY_QUERY)?.toString()}
        className="rounded-full border bg-white px-4 py-2 text-sm text-black placeholder:text-black-light hover:border hover:border-primary dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      />
      <SearchIcon />
    </div>
  );

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set(PARAM_KEY_QUERY, term);
    } else {
      params.delete(PARAM_KEY_QUERY);
    }
    replace(`${pathname}?${params.toString()}`);
  }
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="absolute right-3 top-1/2 h-auto w-6 -translate-y-1/2 text-slate-400">
      <path
        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
        fill="currentColor"></path>
    </svg>
  );
}
