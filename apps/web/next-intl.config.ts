import { defineRouting } from "next-intl/routing";
import { locales } from "./lib/locales";

const config = defineRouting({
  locales,
  defaultLocale: "fr",
  localeDetection: false,
  localePrefix: "always"
});

export default config;
