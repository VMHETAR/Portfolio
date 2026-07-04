import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { skillGroups, technologies } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "@/components/shared/section-reveal";

function formatPeriod(start: string, end: string) {
  const startYear = start.split("-")[0];
  const endLabel = end === "Present" ? "Present" : end.split("-")[0];
  return `${startYear} — ${endLabel}`;
}

export function Timeline() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionReveal>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Experience & Education
        </h2>
      </SectionReveal>

      <div className="relative mt-10 space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-border sm:before:left-1/2 sm:before:-translate-x-px">
        {experience.map((item, index) => (
          <SectionReveal key={item.id} delay={index * 0.05}>
            <div className="relative pl-8 sm:grid sm:grid-cols-2 sm:gap-8 sm:pl-0">
              <div
                className={`sm:text-right ${index % 2 === 0 ? "sm:col-start-1" : "sm:col-start-2 sm:row-start-1"}`}
              >
                <Badge variant="outline" className="mb-2 capitalize">
                  {item.type}
                </Badge>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-primary">{item.organization}</p>
                <p className="text-sm text-muted-foreground">
                  {item.location} · {formatPeriod(item.startDate, item.endDate)}
                </p>
              </div>
              <Card
                className={`mt-4 sm:mt-0 ${index % 2 === 0 ? "sm:col-start-2" : "sm:col-start-1 sm:row-start-1"}`}
              >
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm before:mr-2 before:text-primary before:content-['•']"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background sm:left-1/2 sm:-translate-x-1/2" />
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="border-t border-border bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Skills
          </h2>
        </SectionReveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SectionReveal key={group.category} delay={index * 0.05}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold">{group.category}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechnologiesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionReveal>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Technologies
        </h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="px-3 py-1">
              {tech}
            </Badge>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}

export function PhilosophySection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Philosophy
          </h2>
          <blockquote className="mt-6 border-l-4 border-primary pl-6 text-lg italic text-muted-foreground">
            {profile.philosophy}
          </blockquote>
        </SectionReveal>
      </div>
    </section>
  );
}

export function FunFactsSection() {
  return (
    <section className="border-t border-border bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Fun Facts
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {profile.funFacts.map((fact, index) => (
              <li
                key={fact}
                className="flex gap-3 rounded-lg border border-border bg-card p-4 text-sm"
              >
                <span className="font-mono text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-muted-foreground">{fact}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
}
