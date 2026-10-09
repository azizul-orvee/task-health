import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "services", "about", "training", "careers", "reviews", "contact", ...services.map((s) => s.slug)];
  return pages.map((p) => ({
    url: `${site.url}/${p ? `${p}/` : ""}`,
    changeFrequency: "monthly",
    priority: p ? 0.7 : 1,
  }));
}
