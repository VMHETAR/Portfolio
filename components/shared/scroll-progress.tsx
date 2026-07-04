"use client";

import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { cn } from "@/lib/utils";

export function ScrollProgress({ className }: { className?: string }) {
  const progress = useScrollProgress();

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent",
        className
      )}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Scroll progress"
    >
      <div
        className="h-full bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
