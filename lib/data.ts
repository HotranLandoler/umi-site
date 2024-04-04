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

export async function fetchGameMetas(): Promise<GameMeta[]> {
  return gameMetas;
}

export async function fetchFeed(): Promise<BlogItem[]> {
  return feed;
}
