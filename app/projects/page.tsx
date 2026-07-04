import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { generatePageMetadata } from "@/lib/seo";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionReveal } from "@/components/shared/section-reveal";

export const metadata: Metadata = generatePageMetadata({
  title: "Projects",
  description:
    "Selected projects in reinforcement learning, LLM evaluation, diffusion models, and interpretability research.I do research-oriented projects so you will find partially implemented projects.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionReveal>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Research engineering projects spanning RL systems, LLM evaluation,
          generative models, and interpretability tooling.
        </p>
      </SectionReveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
