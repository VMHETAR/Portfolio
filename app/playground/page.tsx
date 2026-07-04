import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { PlaygroundGrid } from "@/components/playground/playground-grid";
import { SectionReveal } from "@/components/shared/section-reveal";

export const metadata: Metadata = generatePageMetadata({
  title: "Playground",
  description:
    "Interactive demos and visualizations for algorithms, neural networks, and simulations.",
  path: "/playground",
});

export default function PlaygroundPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionReveal>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Playground
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Interactive demos and algorithm visualizations. More experiments
          coming soon.
        </p>
      </SectionReveal>

      <div className="mt-12">
        <PlaygroundGrid />
      </div>
    </div>
  );
}
