import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { getAllResearch } from "@/lib/research";
import { ResearchList } from "@/components/research/research-list";
import { SectionReveal } from "@/components/shared/section-reveal";

export const metadata: Metadata = generatePageMetadata({
  title: "Research",
  description:
    "Research papers, experimental notes, and technical write-ups on AI and machine learning.",
  path: "/research",
});

export default function ResearchPage() {
  const articles = getAllResearch();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionReveal>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Research
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Papers, experimental notes, and research write-ups. 
        </p>
      </SectionReveal>

      <div className="mt-12">
        {articles.length > 0 ? (
          <ResearchList articles={articles} />
        ) : (
          <p className="text-muted-foreground">No research articles yet.</p>
        )}
      </div>
    </div>
  );
}
