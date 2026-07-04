import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

interface PostHeaderProps {
  title: string;
  date: string;
  readingTime: string;
  tags: string[];
  description?: string;
}

export function PostHeader({
  title,
  date,
  readingTime,
  tags,
  description,
}: PostHeaderProps) {
  return (
    <header className="mb-10 border-b border-border pb-8">
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <time dateTime={date}>{formatDate(date)}</time>
        <span>·</span>
        <span>{readingTime}</span>
      </div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      )}
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
    </header>
  );
}
