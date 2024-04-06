import Link from "next/link";
import { type PageData, mainSections } from "@/lib/data";

export default function Hero() {
  return (
    <section className="mb-16 grid grid-cols-[3fr_1fr] grid-rows-[3fr_1fr] gap-8">
      <div className="flex items-end">
        <h1 className="text-6xl font-bold">欢迎来到UMi数据库主页</h1>
      </div>
      <ul className="row-span-2 grid grid-rows-4 gap-4">
        {mainSections.map(function renderSectionLink(section) {
          return <SectionLink key={section.name} data={section} />;
        })}
      </ul>
      <p>
        欢迎来到UMi的网上数据库，这里由UMi的正式成员参与贡献，旨在提供一个集中的高价值信息中介，也许你可以在这里找到很多普通互联网上很难遇到的东西！
      </p>
    </section>
  );
}

function SectionLink({ data }: { data: PageData }) {
  return (
    <li>
      <Link
        className="block h-full w-full rounded-3xl bg-slate-300 p-4 transition-shadow hover:shadow-lg hover:shadow-slate-300"
        href={data.href}>
        <h4 className="text-lg font-bold">{data.name}</h4>
        <p>{data.desc}</p>
      </Link>
    </li>
  );
}
