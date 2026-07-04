import Link from "next/link";
import { socials } from "@/data/socials";
import { getIcon } from "@/lib/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SocialLinks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Connect</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {socials.map((social) => {
          const Icon = getIcon(social.icon);
          return (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:border-primary/30 hover:bg-accent"
            >
              <Icon className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">{social.name}</p>
                <p className="text-xs text-muted-foreground truncate max-w-[200px]">
                  {social.url.replace(/^https?:\/\//, "")}
                </p>
              </div>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
