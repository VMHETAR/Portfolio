import type { Post, PostMeta } from "@/lib/types";
import {
  extractToc,
  getAllMarkdownMeta,
  getMarkdownFileContent,
  getMarkdownFiles,
  parseMarkdown,
} from "@/lib/markdown";

const BLOG_DIR = "content/blog";

export function getAllPosts(): PostMeta[] {
  return getAllMarkdownMeta(BLOG_DIR) as PostMeta[];
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

export function searchPosts(query: string): PostMeta[] {
  const posts = getAllPosts();
  const lowerQuery = query.toLowerCase();

  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.description.toLowerCase().includes(lowerQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const file = getMarkdownFileContent(BLOG_DIR, slug);
  if (!file || file.frontmatter.draft) return null;

  const html = await parseMarkdown(file.content);
  const toc = extractToc(file.content);

  return {
    slug,
    ...file.frontmatter,
    content: file.content,
    html,
    toc,
    readingTime: `${Math.ceil(file.content.trim().split(/\s+/).length / 200)} min read`,
  };
}

export function getPostSlugs(): string[] {
  return getMarkdownFiles(BLOG_DIR);
}

export function filterPostsByTag(tag: string): PostMeta[] {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}
