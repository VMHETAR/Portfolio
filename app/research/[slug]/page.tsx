import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo";
import { getResearchBySlug, getResearchSlugs } from "@/lib/research";
import { PostHeader } from "@/components/blog/post-header";
import { Button } from "@/components/ui/button";

interface ResearchArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getResearchSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ResearchArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getResearchBySlug(slug);

  if (!article) {
    return generatePageMetadata({ title: "Not Found" });
  }

  return generatePageMetadata({
    title: article.title,
    description: article.description,
    path: `/research/${slug}`,
  });
}

export default async function ResearchArticlePage({
  params,
}: ResearchArticlePageProps) {
  const { slug } = await params;
  const article = await getResearchBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Button asChild variant="ghost" size="sm" className="mb-8">
        <Link href="/research">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Research
        </Link>
      </Button>

      <PostHeader
        title={article.title}
        date={article.date}
        readingTime={article.readingTime}
        tags={article.tags}
        description={article.description}
      />

      <div
        className="prose prose-zinc dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-a:text-primary"
        dangerouslySetInnerHTML={{ __html: article.html }}
      />
    </article>
  );
}
