import type { PostMeta, ResearchArticle } from "@/lib/types";
import {
  getAllMarkdownMeta,
  getMarkdownFileContent,
  getMarkdownFiles,
  parseMarkdown,
} from "@/lib/markdown";

const RESEARCH_DIR = "content/research";

export function getAllResearch(): PostMeta[] {
  return getAllMarkdownMeta(RESEARCH_DIR) as PostMeta[];
}

export async function getResearchBySlug(
  slug: string
): Promise<ResearchArticle | null> {
  const file = getMarkdownFileContent(RESEARCH_DIR, slug);
  if (!file || file.frontmatter.draft) return null;

  const html = await parseMarkdown(file.content);

  return {
    slug,
    ...file.frontmatter,
    content: file.content,
    html,
    readingTime: `${Math.ceil(file.content.trim().split(/\s+/).length / 200)} min read`,
  };
}

export function getResearchSlugs(): string[] {
  return getMarkdownFiles(RESEARCH_DIR);
}
