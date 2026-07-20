import type { MetadataRoute } from "next";

import { locales } from "../lib/locales";
import { absoluteUrl, languageAlternates, localePath, siteConfig } from "../lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const alternates = languageAlternates();

  return locales.map((locale) => ({
    url: absoluteUrl(localePath(locale)),
    lastModified,
    changeFrequency: "weekly",
    priority: locale === siteConfig.defaultLocale ? 1 : 0.9,
    alternates: {
      languages: alternates
    }
  }));
}
