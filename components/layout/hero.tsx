import Link from "next/link";
import { type PageData, umiDbSections } from "@/lib/data";

export default function Hero() {
  return (
    <section className="mb-16 grid grid-cols-[3fr_1fr] grid-rows-[3fr_1fr] gap-8">
      <div className="flex items-end">
        <h1 className="text-6xl font-bold">欢迎来到UMi数据库主页</h1>
      </div>
      <ul className="row-span-2 grid grid-rows-4 gap-4">
        {umiDbSections.map(function renderSectionLink(section) {
          return <SectionLink key={section.name} data={section} />;
        })}
      </ul>
      <div>
        <p className="mb-8">
          欢迎来到UMi的网上数据库，这里由UMi的正式成员参与贡献，旨在提供一个集中的高价值信息中介，也许你可以在这里找到很多普通互联网上很难遇到的东西！
        </p>
        <div className="flex gap-4">
          <Link className="button button-primary px-6 py-2" href="#">
            发表内容
          </Link>
          <Link className="button button-outline px-6 py-2" href="#feed">
            最新动态
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectionLink({ data }: { data: PageData }) {
  return (
    <li>
      <Link
        className="to-primary-light block h-full w-full rounded-3xl bg-gradient-to-br from-orange-200 p-4 transition-shadow hover:shadow-lg hover:shadow-slate-300"
        href={data.href}>
        <h4 className="text-lg font-bold">{data.name}</h4>
        <p>{data.desc}</p>
      </Link>
    </li>
  );
}
