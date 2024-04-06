import { feed, gameMetas } from "./placeholder-data";

export type GameMeta = {
  name: string;
  imageSrc: string;
  isNew: boolean;
};

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

export const mainSections: PageData[] = [
  {
    name: "游戏库",
    desc: "推荐喜欢的游戏",
    href: "/gamerec/",
  },
  {
    name: "知识库",
    desc: "分享游戏设计与开发的知识",
    href: "/knowledge/",
  },
  {
    name: "工具资源库",
    desc: "分享游戏开发相关的好物",
    href: "/tools/",
  },
  {
    name: "岁月史书",
    desc: "我们社团的历史记录",
    href: "/history/",
  },
];

export async function fetchGameMetas(): Promise<GameMeta[]> {
  return gameMetas;
}

export async function fetchFeed(): Promise<BlogItem[]> {
  return feed;
}
