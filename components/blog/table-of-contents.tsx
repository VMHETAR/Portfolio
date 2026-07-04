import Link from "next/link";
import type { TocItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="hidden xl:block">
      <p className="mb-4 text-sm font-semibold">On this page</p>
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <ul className="space-y-2 text-sm">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className={cn(
                  "block text-muted-foreground transition-colors hover:text-foreground",
                  item.level === 3 && "pl-4"
                )}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </nav>
  );
}
