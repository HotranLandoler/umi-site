import { $Enums } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import placeholderAvatar from "@/app/icon.svg";
import { formatDate, styleOnCondition } from "@/lib/utils";

type Props = {
  title: string;
  imageUrl: string | null;
  author: {
    name: string;
  };
  createdAt: Date;
  content: string;
  category: $Enums.Category;
  tags: {
    name: string;
  }[];
};

export default function PostCard({
  title,
  imageUrl,
  author,
  createdAt,
  content,
  category,
  tags,
}: Props) {
  return (
    <article className="mb-4 overflow-hidden rounded-lg bg-white">
      <div
        className={`relative ${styleOnCondition("h-8", imageUrl === null)} ${styleOnCondition("h-32", imageUrl !== null)}`}>
        {imageUrl && (
          <Image
            className="w-full object-cover object-center"
            src={imageUrl}
            fill
            alt={title}
          />
        )}
        <Link
          className="absolute left-2 top-2 inline-block rounded-full bg-slate-100 px-2"
          href="#">
          {category}
        </Link>
      </div>
      <div className="p-4">
        <header className="mb-2">
          <div className="mb-1 flex items-center gap-2 text-slate-500">
            <Image
              className="h-4 w-4 rounded-full"
              src={placeholderAvatar}
              width={50}
              height={50}
              alt=""
            />
            <span>{author.name}</span>
            <time className="ml-auto" dateTime={createdAt.toString()}>
              {formatDate(createdAt, true)}
            </time>
          </div>
          <h3 className="text-xl font-bold underline underline-offset-4">
            <Link className="transition-opacity hover:opacity-50" href="#">
              {title}
            </Link>
          </h3>
        </header>
        <p className="mb-4 text-slate-500">{content}</p>
        <div className="mb-2 flex gap-1">
          {tags.map(function renderTag(tag) {
            return (
              <span
                key={tag.name}
                className="rounded-full bg-slate-400 px-2 text-sm text-white">
                {tag.name}
              </span>
            );
          })}
        </div>
        <footer className="flex gap-2 border-t-2 border-slate-200 pt-2 text-sm text-slate-500">
          <div className="flex gap-1">
            <CommentsIcon />
            <span>{5}</span>
          </div>
          <div className="flex gap-1">
            <LikesIcon />
            <span>{29}</span>
          </div>
          <div className="ml-auto">预计阅读 {3} 分钟</div>
        </footer>
      </div>
    </article>
  );
}

function CommentsIcon() {
  return (
    <svg
      className="h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512">
      <path
        d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92c-13.4 30.2-35.5 54.2-35.8 54.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25c32.2 15.7 70.3 25 111.3 25c114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92c0-66.9-53.5-124.2-129.3-148.1c.9 6.6 1.3 13.3 1.3 20.1c0 105.9-107.7 192-240 192c-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25c21.8 12.7 52.1 25 88.7 25c3.2 0 6.1-1.9 7.3-4.8c1.3-2.9.7-6.3-1.5-8.7c-.3-.3-22.4-24.2-35.8-54.5z"
        fill="currentColor"></path>
    </svg>
  );
}

function LikesIcon() {
  return (
    <svg
      className="h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      <path
        d="M13.12 2.06L7.58 7.6c-.37.37-.58.88-.58 1.41V19c0 1.1.9 2 2 2h9c.8 0 1.52-.48 1.84-1.21l3.26-7.61C23.94 10.2 22.49 8 20.34 8h-5.65l.95-4.58c.1-.5-.05-1.01-.41-1.37c-.59-.58-1.53-.58-2.11.01zM3 21c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2z"
        fill="currentColor"></path>
    </svg>
  );
}
