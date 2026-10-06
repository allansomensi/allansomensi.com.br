import type { MetadataRoute } from "next";
import { site, storeCategories } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: site.url, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${site.url}/loja`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...storeCategories.map((category) => ({
      url: `${site.url}${category.href}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...["/politica-de-privacidade", "/termos-de-uso"].map((path) => ({
      url: `${site.url}${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
