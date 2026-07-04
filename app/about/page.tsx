import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import {
  Timeline,
  SkillsSection,
  TechnologiesSection,
  PhilosophySection,
  FunFactsSection,
} from "@/components/about/about-sections";
import { profile } from "@/data/profile";
import { SectionReveal } from "@/components/shared/section-reveal";

export const metadata: Metadata = generatePageMetadata({
  title: "About",
  description: `Learn about ${profile.name} — background, skills, experience, and research philosophy.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionReveal>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {profile.bio}
          </p>
        </SectionReveal>
      </section>
      <Timeline />
      <SkillsSection />
      <TechnologiesSection />
      <PhilosophySection />
      <FunFactsSection />
    </>
  );
}
