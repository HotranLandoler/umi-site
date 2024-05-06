import { feed } from "./placeholder-data";
import { $Enums } from "@prisma/client";

export type PageData = {
  name: string;
  key: string;
  desc: string;
  href: string;
};

export const siteTitle = "UMi游研社";

export const siteAnnouncement = "网站建设中 - 功能和数据可能变化";

export const categoryFormatter = {
  [$Enums.Category.GAMEREC]: "游戏推荐",
  [$Enums.Category.KNOWLEDGE]: "知识分享",
  [$Enums.Category.TOOLS]: "工具资源",
  [$Enums.Category.HISTORY]: "岁月史书",
};

export const umiDbSections: PageData[] = [
  {
    name: categoryFormatter[$Enums.Category.GAMEREC],
    key: $Enums.Category.GAMEREC,
    desc: "推荐喜欢的游戏",
    href: "/gamerec",
  },
  {
    name: categoryFormatter[$Enums.Category.KNOWLEDGE],
    key: $Enums.Category.KNOWLEDGE,
    desc: "分享游戏设计与开发的知识",
    href: "/knowledge",
  },
  {
    name: categoryFormatter[$Enums.Category.TOOLS],
    key: $Enums.Category.TOOLS,
    desc: "游戏开发相关的好物",
    href: "/tools",
  },
  {
    name: categoryFormatter[$Enums.Category.HISTORY],
    key: $Enums.Category.HISTORY,
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
