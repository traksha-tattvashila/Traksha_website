import type { MetadataRoute } from "next";
import { NOTES } from "@/lib/notes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tattvashila.org";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/philosophy`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/notes`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const noteRoutes: MetadataRoute.Sitemap = NOTES.map((n) => ({
    url: `${base}/notes/${n.slug}`,
    lastModified: new Date(n.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...noteRoutes];
}
