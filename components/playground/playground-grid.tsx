import { playgroundDemos } from "@/data/playground";
import { getIcon } from "@/lib/icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionReveal } from "@/components/shared/section-reveal";

export function PlaygroundGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {playgroundDemos.map((demo, index) => {
        const Icon = getIcon(demo.icon);
        return (
          <SectionReveal key={demo.id} delay={index * 0.05}>
            <Card className="group h-full transition-all hover:border-primary/30 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline">Coming Soon</Badge>
                </div>
                <CardTitle className="mt-4 text-lg">{demo.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {demo.description}
                </p>
                <div className="mt-6 flex h-32 items-center justify-center rounded-lg border border-dashed border-border bg-muted/30">
                  <p className="text-xs text-muted-foreground">
                    Interactive demo placeholder
                  </p>
                </div>
              </CardContent>
            </Card>
          </SectionReveal>
        );
      })}
    </div>
  );
}
