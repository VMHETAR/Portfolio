import Link from "next/link";
import { navLinks } from "@/lib/constants";
import { profile } from "@/data/profile";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-semibold">{profile.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">{profile.title}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Navigation</p>
            <nav className="mt-3 flex flex-col gap-2" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-sm font-medium">Contact</p>
            <p className="mt-3 text-sm text-muted-foreground">{profile.email}</p>
            <p className="text-sm text-muted-foreground">{profile.location}</p>
          </div>
        </div>
        <Separator className="my-8" />
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
