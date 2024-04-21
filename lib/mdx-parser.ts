import fs from "fs";
import path from "path";

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

export function parseFrontmatter<TMetaData>(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<TMetaData> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof TMetaData] = value as any;
  });

  return { metadata: metadata as TMetaData, content };
}
