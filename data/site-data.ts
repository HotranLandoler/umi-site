import type { Options } from "@node-rs/argon2";
import { Category } from "@prisma/client";

type PageData = {
  name: string;
  key: Category;
  desc: string;
  slug: string;
};

/**
 * 网站标题
 */
export const siteTitle = "UMi游研社";

/**
 * 网站公告
 */
export const siteAnnouncement = "网站建设中 - 测试结束时将清空数据";

/**
 * 数据库分类别浏览的开头URL
 */
export const categoryBaseUrl = "/category";

/**
 * 数据库主要类别的标签
 */
export const categoryMapping = {
  [Category.GAMEREC]: {
    name: "游戏推荐",
    slug: "gamerec",
  },
  [Category.KNOWLEDGE]: {
    name: "知识分享",
    slug: "knowledge",
  },
  [Category.TOOLS]: {
    name: "工具资源",
    slug: "tools",
  },
  [Category.HISTORY]: {
    name: "岁月史书",
    slug: "history",
  },
};

/**
 * 数据库主要类别的数据
 */
export const umiDbSections: PageData[] = [
  {
    name: categoryMapping[Category.GAMEREC].name,
    key: Category.GAMEREC,
    desc: "推荐喜欢的游戏",
    slug: categoryMapping[Category.GAMEREC].slug,
  },
  {
    name: categoryMapping[Category.KNOWLEDGE].name,
    key: Category.KNOWLEDGE,
    desc: "分享游戏设计与开发的知识",
    slug: categoryMapping[Category.KNOWLEDGE].slug,
  },
  {
    name: categoryMapping[Category.TOOLS].name,
    key: Category.TOOLS,
    desc: "游戏开发相关的好物",
    slug: categoryMapping[Category.TOOLS].slug,
  },
  {
    name: categoryMapping[Category.HISTORY].name,
    key: Category.HISTORY,
    desc: "我们社团的历史记录",
    slug: categoryMapping[Category.HISTORY].slug,
  },
];

/**
 * [@node-rs/argon2]设置
 */
export const argon2Setting: Options = {
  // recommended minimum parameters
  memoryCost: 19456,
  timeCost: 2,
  outputLen: 32,
  parallelism: 1,
};
