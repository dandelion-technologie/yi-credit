import { ClerkProvider } from "@clerk/nextjs";
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { locales } from "../../lib/locales";
import { Providers } from "../../components/providers";

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

  return (
    <ClerkProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Providers>
          <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 dark:from-slate-950 dark:to-slate-900 dark:text-slate-50">
            {children}
          </div>
        </Providers>
      </NextIntlClientProvider>
    </ClerkProvider>
  );
}
