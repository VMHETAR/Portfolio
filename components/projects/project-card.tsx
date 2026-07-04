"use client";

import Image from "next/image";
import Link from "next/link";
import { Code, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionReveal } from "@/components/shared/section-reveal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <SectionReveal delay={index * 0.05}>
      <Card className="group flex h-full flex-col overflow-hidden transition-all hover:border-primary/30 hover:shadow-lg">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </CardHeader>
        <CardContent className="flex-1 space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          <div>
            <h4 className="text-sm font-medium">Challenges</h4>
            <ul className="mt-2 space-y-1">
              {project.challenges.map((c) => (
                <li key={c} className="text-sm text-muted-foreground before:mr-2 before:content-['•']">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium">What I Learned</h4>
            <ul className="mt-2 space-y-1">
              {project.learnings.map((l) => (
                <li key={l} className="text-sm text-muted-foreground before:mr-2 before:content-['•']">
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Code className="mr-1 h-4 w-4" />
              GitHub
            </Link>
          </Button>
          {project.liveUrl && (
            <Button asChild size="sm">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </SectionReveal>
  );
}
