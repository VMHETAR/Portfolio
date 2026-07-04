import Link from "next/link";
import { ArrowRight, FlaskConical, FolderKanban, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { getIcon } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ParticleBackground } from "@/components/home/particle-background";
import { SectionReveal } from "@/components/shared/section-reveal";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <ParticleBackground />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionReveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            {profile.title}
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {profile.tagline}
          </p>
          <p className="mt-4 max-w-2xl text-muted-foreground">{profile.bio}</p>
        </SectionReveal>

        <SectionReveal delay={0.2} className="mt-10 flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="/projects">
              View Projects
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/research">
              <FlaskConical className="mr-1 h-4 w-4" />
              Read Research
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="/contact">
              <Mail className="mr-1 h-4 w-4" />
              Get in Touch
            </Link>
          </Button>
        </SectionReveal>
      </div>
    </section>
  );
}

export function InterestsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionReveal>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Current Interests
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Research areas and topics I am actively exploring.
        </p>
      </SectionReveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {profile.interests.map((interest, index) => {
          const Icon = getIcon(interest.icon);
          return (
            <SectionReveal key={interest.title} delay={index * 0.1}>
              <Card className="group h-full transition-all hover:border-primary/30 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{interest.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            </SectionReveal>
          );
        })}
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionReveal>
        <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardContent className="flex flex-col items-center gap-6 p-10 text-center sm:p-16">
            <FolderKanban className="h-10 w-10 text-primary" />
            <h2 className="text-2xl font-bold sm:text-3xl">
              Explore my work
            </h2>
            <p className="max-w-lg text-muted-foreground">
              From reinforcement learning systems to LLM evaluation harnesses —
              see how research ideas become working systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/blog">Read the Blog</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </SectionReveal>
    </section>
  );
}
