"use client";

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  FileText,
  FlaskConical,
  FolderKanban,
  Home,
  Mail,
  Moon,
  Sun,
  User,
  Gamepad2,
} from "lucide-react";
import { useCommandPalette } from "@/hooks/use-command-palette";
import { navLinks } from "@/lib/constants";
import { profile } from "@/data/profile";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const iconMap: Record<string, React.ElementType> = {
  "/": Home,
  "/about": User,
  "/projects": FolderKanban,
  "/research": FlaskConical,
  "/blog": FileText,
  "/playground": Gamepad2,
  "/contact": Mail,
};

export function CommandPalette() {
  const { open, setOpen } = useCommandPalette();
  const router = useRouter();
  const { setTheme, theme } = useTheme();

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search pages and actions..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          {navLinks.map((link) => {
            const Icon = iconMap[link.href] ?? Home;
            return (
              <CommandItem
                key={link.href}
                onSelect={() => runCommand(() => router.push(link.href))}
              >
                <Icon className="mr-2 h-4 w-4" />
                {link.label}
              </CommandItem>
            );
          })}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem
            onSelect={() =>
              runCommand(() => setTheme(theme === "dark" ? "light" : "dark"))
            }
          >
            {theme === "dark" ? (
              <Sun className="mr-2 h-4 w-4" />
            ) : (
              <Moon className="mr-2 h-4 w-4" />
            )}
            Toggle theme
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() => navigator.clipboard.writeText(profile.email))
            }
          >
            <Mail className="mr-2 h-4 w-4" />
            Copy email
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
