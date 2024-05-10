import { feed } from "./placeholder-data";
import { Category } from "@prisma/client";

export type PageData = {
  name: string;
  key: Category;
  desc: string;
  href: string;
};

export const siteTitle = "UMi游研社";

export const siteAnnouncement = "网站建设中 - 功能和数据可能变化";

export const categoryFormatter = {
  [Category.GAMEREC]: "游戏推荐",
  [Category.KNOWLEDGE]: "知识分享",
  [Category.TOOLS]: "工具资源",
  [Category.HISTORY]: "岁月史书",
};

export const umiDbSections: PageData[] = [
  {
    name: categoryFormatter[Category.GAMEREC],
    key: Category.GAMEREC,
    desc: "推荐喜欢的游戏",
    href: "/gamerec",
  },
  {
    name: categoryFormatter[Category.KNOWLEDGE],
    key: Category.KNOWLEDGE,
    desc: "分享游戏设计与开发的知识",
    href: "/knowledge",
  },
  {
    name: categoryFormatter[Category.TOOLS],
    key: Category.TOOLS,
    desc: "游戏开发相关的好物",
    href: "/tools",
  },
  {
    name: categoryFormatter[Category.HISTORY],
    key: Category.HISTORY,
    desc: "我们社团的历史记录",
    href: "/history",
  },
];

export const argon2Setting = {
  // recommended minimum parameters
  memoryCost: 19456,
  timeCost: 2,
  hashLength: 32,
  parallelism: 1,
};
