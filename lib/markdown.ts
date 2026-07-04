import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import type { PostFrontmatter, TocItem } from "@/lib/types";

const WORDS_PER_MINUTE = 200;

export function getReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / WORDS_PER_MINUTE);
  return `${minutes} min read`;
}

export function extractToc(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].replace(/[#*`]/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    toc.push({ id, text, level });
  }

  return toc;
}

export async function parseMarkdown(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap",
      properties: { className: ["anchor"] },
    })
    .use(rehypePrettyCode, {
      theme: {
        dark: "github-dark",
        light: "github-light",
      },
      keepBackground: false,
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  return result.toString();
}

export function getMarkdownFiles(directory: string): string[] {
  const contentDir = path.join(process.cwd(), directory);

  if (!fs.existsSync(contentDir)) {
    return [];
  }

  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getMarkdownFileContent(
  directory: string,
  slug: string
): { frontmatter: PostFrontmatter; content: string } | null {
  const filePath = path.join(process.cwd(), directory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    frontmatter: data as PostFrontmatter,
    content,
  };
}

export function getAllMarkdownMeta(directory: string) {
  const slugs = getMarkdownFiles(directory);

  return slugs
    .map((slug) => {
      const file = getMarkdownFileContent(directory, slug);
      if (!file || file.frontmatter.draft) return null;

      return {
        slug,
        ...file.frontmatter,
        readingTime: getReadingTime(file.content),
      };
    })
    .filter(Boolean)
    .sort(
      (a, b) =>
        new Date(b!.date).getTime() - new Date(a!.date).getTime()
    );
}
