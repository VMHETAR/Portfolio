import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { BlogList } from "@/components/blog/blog-list";
import { SectionReveal } from "@/components/shared/section-reveal";

export const metadata: Metadata = generatePageMetadata({
  title: "Blog",
  description:
    "Technical blog on deep learning, reinforcement learning, and AI research engineering.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionReveal>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Technical writing on machine learning, research engineering, and AI
          systems.
        </p>
      </SectionReveal>

      <div className="mt-12">
        <BlogList posts={posts} tags={tags} />
      </div>
    </div>
  );
}
