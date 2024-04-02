import Image from "next/image";

export default function Home() {
  return (
    <main className="rounded-lg bg-slate-100 p-12">
      <Hero />
      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ea ad,
          asperiores quia odit molestiae, harum unde natus quam vitae eaque
          accusamus dolore cumque repudiandae perspiciatis eos sint obcaecati
          cum.
        </p>
      </section>
    </main>
  );
}

function Hero() {
  return (
    <div className="mb-16 grid grid-cols-[3fr_1fr] grid-rows-[3fr_1fr] gap-12">
      <div className="flex items-end">
        <h1 className="text-6xl font-bold">欢迎来到UMi数据库主页</h1>
      </div>
      <ul className="row-span-2 grid grid-rows-3 gap-8">
        <li className="min-w-32 rounded-2xl bg-slate-500"></li>
        <li className="min-w-32 rounded-2xl bg-slate-500"></li>
        <li className="min-w-32 rounded-2xl bg-slate-500"></li>
      </ul>
      <div className="flex gap-8">
        <div className="aspect-square min-h-32 rounded-full bg-slate-500"></div>
        <p>
          欢迎来到UMi的网上数据库，这里由UMi的正式成员参与贡献，旨在提供一个集中的高价值信息中介，也许你可以在这里找到很多普通互联网上很难遇到的东西！
        </p>
      </div>
    </div>
  );
}
