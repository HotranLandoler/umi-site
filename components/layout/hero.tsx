import Link from "next/link";
import { categoryBaseUrl, umiDbSections } from "@/data/site-data";
import { buttonVariants } from "../ui/button";
import AddPostLink from "../posts/add-post-link";

export default function Hero() {
  return (
    <section className="mb-16 grid grid-cols-[3fr_1fr] grid-rows-[3fr_1fr] gap-6 lg:grid-cols-1 lg:grid-rows-[2fr_1fr_auto]">
      <Heading />
      <DbSectionLinks />
      <CTA />
    </section>
  );
}

function Heading() {
  return (
    <div className="flex items-end leading-10">
      <h1 className="text-6xl/tight font-bold sm:text-4xl/tight">
        欢迎来到
        <br />
        UMi数据库主页
      </h1>
    </div>
  );
}

function DbSectionLinks() {
  return (
    <ul className="row-span-2 grid grid-rows-4 gap-4 lg:row-span-1 lg:row-start-3 lg:grid-cols-4 lg:grid-rows-1 sm:grid-cols-2">
      {umiDbSections.map((section) => (
        <SectionLink key={section.name} data={section} />
      ))}
    </ul>
  );
}

function CTA() {
  return (
    <div>
      <p className="mb-8 sm:mb-4">
        欢迎来到UMi的网上数据库，这里由UMi的正式成员参与贡献，旨在提供一个集中的高价值信息中介，也许你可以在这里找到很多普通互联网上很难遇到的东西！
      </p>
      <div className="flex gap-4">
        <AddPostLink size="lg" />
        <Link
          className={buttonVariants({ size: "lg", variant: "secondary" })}
          href="#feed">
          最新动态
        </Link>
      </div>
    </div>
  );
}

function SectionLink({ data }: { data: (typeof umiDbSections)[number] }) {
  return (
    <li>
      <Link
        className="block h-full w-full rounded-lg bg-secondary p-4 transition-colors hover:bg-primary"
        href={`${categoryBaseUrl}/${data.slug}`}>
        <h4 className="text-lg font-bold">{data.name}</h4>
        <p>{data.desc}</p>
      </Link>
    </li>
  );
}
