import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { Providers } from "../../components/providers";
import { locales } from "../../lib/locales";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: LayoutProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description")
  };
}

export default async function LocaleLayout({ children, params: { locale } }: LayoutProps) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  const page = (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Providers>
        <div className="min-h-screen bg-gradient-to-b from-yi-porcelain to-yi-paper text-yi-ink dark:from-yi-ink dark:to-yi-night dark:text-yi-mist">
          {children}
        </div>
      </Providers>
    </NextIntlClientProvider>
  );

  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return page;
  }

  return <ClerkProvider>{page}</ClerkProvider>;
}
