import type { MetadataRoute } from "next";

import { siteConfig } from "../lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "YICREDIT 易信贷",
    short_name: "YICREDIT",
    description: "YICREDIT 易信贷 | 法国贷款与融资咨询",
    start_url: "/fr",
    scope: "/",
    display: "standalone",
    background_color: "#05172E",
    theme_color: "#05172E",
    icons: [
      {
        src: siteConfig.icon,
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: siteConfig.appleIcon,
        sizes: "180x180",
        type: "image/png"
      }
    ]
  };
}
