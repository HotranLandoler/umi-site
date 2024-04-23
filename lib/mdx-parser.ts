import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getMDXData<TMetaData>(dir: string) {
  let mdxFiles = fs.readdirSync(dir).filter(function isMdx(file) {
    return path.extname(file) === ".mdx";
  });
  return mdxFiles.map(function readMdxFile(file) {
    let rawContent = fs.readFileSync(path.join(dir, file), "utf-8");
    let { metadata, content } = parseFrontmatter<TMetaData>(rawContent);
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

function parseFrontmatter<TMetaData>(fileContent: string) {
  let { data, content } = matter(fileContent);

  return { metadata: data as TMetaData, content };
}
