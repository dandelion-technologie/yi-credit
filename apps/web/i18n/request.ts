import { getRequestConfig } from "next-intl/server";

import { locales } from "../lib/locales";

type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;
  const locale: Locale = locales.includes(requestedLocale as Locale) ? (requestedLocale as Locale) : "fr";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
