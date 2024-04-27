import path from "path";
import type { GameMeta } from "./interfaces";
import { feed } from "./placeholder-data";
import { getMDXData } from "./mdx-parser";

export type BlogItem = {
  id: number;
  category: string;
  imageSrc: string;
  author: string;
  publishTime: Date;
  title: string;
  content: string;
  tags: string[];
  comments: string[];
  likes: number;
  reading: number;
};

export type PageData = {
  name: string;
  desc: string;
  href: string;
};

export const siteTitle = "UMi游研社";

export const siteAnnouncement = "网站建设中 - 功能和数据可能变化";

export const umiDbSections: PageData[] = [
  {
    name: "游戏推荐",
    desc: "推荐喜欢的游戏",
    href: "/gamerec",
  },
  {
    name: "知识分享",
    desc: "分享游戏设计与开发的知识",
    href: "/knowledge",
  },
  {
    name: "工具资源",
    desc: "游戏开发相关的好物",
    href: "/tools",
  },
  {
    name: "岁月史书",
    desc: "我们社团的历史记录",
    href: "/history",
  },
];

export async function fetchFeed(): Promise<BlogItem[]> {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return feed;
}

export function getAllGames() {
  const dir = path.join(process.cwd(), "app", "(main)", "games", "pages");
  return getMDXData<GameMeta>(dir).sort(function sortByReleaseDate(a, b) {
    if (new Date(a.metadata.releaseDate) > new Date(b.metadata.releaseDate)) {
      return -1;
    }
    return 1;
  });
}
