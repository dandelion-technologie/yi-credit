import "../globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from "next";
import { Noto_Sans_SC, ZCOOL_KuaiLe } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { Providers } from "../../components/providers";
import { WechatShareConfig } from "../../components/wechat-share-config";
import { locales } from "../../lib/locales";
import {
  absoluteUrl,
  buildHomeJsonLd,
  languageAlternates,
  localeHreflangs,
  localePath,
  ogLocales,
  seoKeywords,
  siteConfig,
  toSupportedLocale
} from "../../lib/seo";

const sans = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"]
});

const display = ZCOOL_KuaiLe({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400"
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: LayoutProps): Promise<Metadata> {
  const supportedLocale = toSupportedLocale(locale);
  const t = await getTranslations({ locale: supportedLocale, namespace: "Metadata" });
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    applicationName: siteConfig.name,
    title,
    description,
    category: "finance",
    keywords: seoKeywords[supportedLocale],
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "32x32" },
        { url: siteConfig.icon, sizes: "512x512", type: "image/png" }
      ],
      apple: [{ url: siteConfig.appleIcon, sizes: "180x180", type: "image/png" }],
      shortcut: ["/favicon.ico"]
    },
    manifest: "/manifest.webmanifest",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
        }
      : undefined,
    alternates: {
      canonical: absoluteUrl(localePath(supportedLocale)),
      languages: languageAlternates()
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(localePath(supportedLocale)),
      siteName: siteConfig.name,
      type: "website",
      locale: ogLocales[supportedLocale],
      alternateLocale: locales.filter((item) => item !== supportedLocale).map((item) => ogLocales[item]),
      images: [
        {
          url: absoluteUrl(siteConfig.wechatImage),
          width: 512,
          height: 512,
          alt: `${siteConfig.name} 微信分享图`,
          type: "image/png"
        },
        {
          url: absoluteUrl(siteConfig.socialImage),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} 易信贷`,
          type: "image/png"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(siteConfig.socialImage)]
    },
    other: {
      image: absoluteUrl(siteConfig.wechatImage),
      thumbnail: absoluteUrl(siteConfig.wechatImage),
      "wechat:title": title,
      "wechat:description": description,
      "wechat:image": absoluteUrl(siteConfig.wechatImage)
    }
  };
}

export const viewport: Viewport = {
  themeColor: "#05172E",
  colorScheme: "light"
};

export default async function LocaleLayout({ children, params: { locale } }: LayoutProps) {
  const supportedLocale = toSupportedLocale(locale);
  unstable_setRequestLocale(supportedLocale);
  const messages = await getMessages();
  const metadataMessages = messages.Metadata as { title: string; description: string };
  const jsonLd = buildHomeJsonLd(supportedLocale, metadataMessages.title, metadataMessages.description);
  const content = (
    <NextIntlClientProvider locale={supportedLocale} messages={messages}>
      <Providers>
        <div className="min-h-screen bg-gradient-to-b from-yi-porcelain to-yi-paper text-yi-ink dark:from-yi-ink dark:to-yi-night dark:text-yi-mist">
          {children}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Providers>
    </NextIntlClientProvider>
  );

  return (
    <html lang={localeHreflangs[supportedLocale]} suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable}`}>
        <img
          src={siteConfig.wechatImage}
          width={512}
          height={512}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[-9999px] top-0 size-[300px] opacity-[0.01]"
        />
        <WechatShareConfig
          title={metadataMessages.title}
          description={metadataMessages.description}
          link={absoluteUrl(localePath(supportedLocale))}
          image={absoluteUrl(siteConfig.wechatImage)}
        />
        {process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ? <ClerkProvider>{content}</ClerkProvider> : content}
      </body>
    </html>
  );
}
