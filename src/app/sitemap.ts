import { projects } from "@/content/site";
import { getSiteUrl } from "@/lib/siteUrl";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const pages = ["", "/trabalho", "/laboratorio", "/sobre", "/colofao"];
  const work = projects
    .filter((project) => project.slug !== "laboratorio")
    .map((project) => `/trabalho/${project.slug}`);

  return [...pages, ...work].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
