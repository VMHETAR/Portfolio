import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { getPostSlugs } from "@/lib/blog";
import { getResearchSlugs } from "@/lib/research";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/research",
    "/blog",
    "/playground",
    "/contact",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogRoutes = getPostSlugs().map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const researchRoutes = getResearchSlugs().map((slug) => ({
    url: `${siteConfig.url}/research/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes, ...researchRoutes];
}
