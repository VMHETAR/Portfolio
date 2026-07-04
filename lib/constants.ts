import type { NavLink } from "@/lib/types";

export const siteConfig = {
  name: "Varad Mhetar",
  description:
    "AI Engineer & Researcher building intelligent systems at the intersection of deep learning, reinforcement learning, and scientific computing.",
  url: "https://arjunmehta.dev",
  ogImage: "/og-image.png",
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
  { href: "/playground", label: "Playground" },
  { href: "/contact", label: "Contact" },
];
