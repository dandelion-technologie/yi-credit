import { locales } from "./locales";

export type Locale = (typeof locales)[number];

const fallbackSiteUrl = "https://www.yicredit.fr";

function normalizeSiteUrl(value: string) {
  return value.replace(/\/+$/, "");
}

export const siteConfig = {
  name: "YICREDIT",
  legalName: "YICREDIT SAS",
  siteUrl: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl),
  defaultLocale: "fr" as Locale,
  socialImage: "/assets/yicredit/seo/share-card-yicredit.png",
  wechatImage: "/assets/yicredit/seo/wechat-share-yicredit.png",
  icon: "/icon.png",
  appleIcon: "/apple-icon.png",
  email: "xucheng@dandelion-intl.com",
  phone: "+33664974529",
  orias: "26008676",
  siren: "102332640"
};

export const localeHreflangs: Record<Locale, string> = {
  fr: "fr-FR",
  zh: "zh-CN",
  en: "en-US"
};

export const ogLocales: Record<Locale, string> = {
  fr: "fr_FR",
  zh: "zh_CN",
  en: "en_US"
};

export const seoKeywords: Record<Locale, string[]> = {
  fr: [
    "YICREDIT",
    "courtier crédit France",
    "financement professionnel",
    "crédit immobilier France",
    "regroupement de crédits",
    "financement équipement"
  ],
  zh: [
    "YICREDIT",
    "易信贷",
    "法国贷款",
    "法国房贷",
    "企业融资",
    "设备贷款",
    "债务整合"
  ],
  en: [
    "YICREDIT",
    "loans in France",
    "property loans France",
    "business financing France",
    "equipment financing",
    "debt consolidation"
  ]
};

export function toSupportedLocale(locale: string): Locale {
  return locales.includes(locale as Locale) ? (locale as Locale) : siteConfig.defaultLocale;
}

export function localePath(locale: Locale) {
  return `/${locale}`;
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function languageAlternates() {
  return {
    ...Object.fromEntries(locales.map((locale) => [localeHreflangs[locale], absoluteUrl(localePath(locale))])),
    "x-default": absoluteUrl(localePath(siteConfig.defaultLocale))
  };
}

export function buildHomeJsonLd(locale: Locale, title: string, description: string) {
  const origin = siteConfig.siteUrl;
  const pageUrl = absoluteUrl(localePath(locale));
  const organizationId = `${origin}/#organization`;
  const websiteId = `${origin}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "FinancialService"],
        "@id": organizationId,
        name: siteConfig.legalName,
        alternateName: ["YICREDIT", "易信贷"],
        url: origin,
        logo: absoluteUrl(siteConfig.icon),
        image: absoluteUrl(siteConfig.socialImage),
        email: siteConfig.email,
        telephone: siteConfig.phone,
        areaServed: "France",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Paris",
          addressCountry: "FR"
        },
        identifier: [
          {
            "@type": "PropertyValue",
            propertyID: "ORIAS",
            value: siteConfig.orias
          },
          {
            "@type": "PropertyValue",
            propertyID: "SIREN",
            value: siteConfig.siren
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: origin,
        name: siteConfig.name,
        inLanguage: localeHreflangs[locale],
        publisher: {
          "@id": organizationId
        }
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        inLanguage: localeHreflangs[locale],
        isPartOf: {
          "@id": websiteId
        },
        about: {
          "@id": organizationId
        }
      }
    ]
  };
}
