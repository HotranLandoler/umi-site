type GameAuthor = {
  name: string;
  role: string;
};

export type GameMeta = {
  title: string;
  excerpt: string;
  coverImage: string;
  bannerImage: string;
  releaseDate: string;
  authors: GameAuthor[];
  ogImage: string;
  link: string;
};
