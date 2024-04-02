export type GameMeta = {
  name: string;
  imageSrc: string;
  isNew: boolean;
};

export async function fetchGameMetas(): Promise<GameMeta[]> {
  return [
    {
      name: "Poopy Bird",
      imageSrc: "",
      isNew: true,
    },
    {
      name: "死亡地带",
      imageSrc: "",
      isNew: true,
    },
    {
      name: "Belt Rush",
      imageSrc: "",
      isNew: false,
    },
    {
      name: "吃土",
      imageSrc: "",
      isNew: false,
    },
    {
      name: "Poopy Bird2",
      imageSrc: "",
      isNew: false,
    },
    {
      name: "死亡地带2",
      imageSrc: "",
      isNew: false,
    },
    {
      name: "Belt Rush2",
      imageSrc: "",
      isNew: false,
    },
    {
      name: "吃土2",
      imageSrc: "",
      isNew: false,
    },
  ];
}
