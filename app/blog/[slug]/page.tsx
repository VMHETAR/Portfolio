import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { PostHeader } from "@/components/blog/post-header";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return generatePageMetadata({ title: "Not Found" });
  }

  return generatePageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Button asChild variant="ghost" size="sm" className="mb-8">
        <Link href="/blog">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <div className="grid gap-12 xl:grid-cols-[1fr_240px]">
        <article className="min-w-0 max-w-3xl">
          <PostHeader
            title={post.title}
            date={post.date}
            readingTime={post.readingTime}
            tags={post.tags}
            description={post.description}
          />
          <div
            className="prose prose-zinc dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
        <aside className="hidden xl:block">
          <div className="sticky top-24">
            <TableOfContents items={post.toc} />
          </div>
        </aside>
      </div>
    </div>
  );
}
