import Link from "next/link";
import type { PostMeta } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionReveal } from "@/components/shared/section-reveal";

interface ResearchListProps {
  articles: PostMeta[];
}

export function ResearchList({ articles }: ResearchListProps) {
  return (
    <div className="grid gap-6">
      {articles.map((article, index) => (
        <SectionReveal key={article.slug} delay={index * 0.05}>
          <Link href={`/research/${article.slug}`}>
            <Card className="transition-all hover:border-primary/30 hover:shadow-md">
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <time dateTime={article.date}>
                    {formatDate(article.date)}
                  </time>
                  <span>·</span>
                  <span>{article.readingTime}</span>
                </div>
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {article.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        </SectionReveal>
      ))}
    </div>
  );
}
