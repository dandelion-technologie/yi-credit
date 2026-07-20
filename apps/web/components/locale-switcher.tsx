"use client";

import { Check, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { locales } from "../lib/locales";

type Locale = (typeof locales)[number];

const languageNames: Record<Locale, string> = {
  fr: "Français",
  zh: "中文",
  en: "English"
};

function FranceFlag() {
  return (
    <svg aria-hidden="true" viewBox="0 0 30 20" className="h-5 w-[30px] overflow-hidden rounded-[2px] shadow-sm">
      <rect width="10" height="20" fill="#002395" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#ED2939" />
    </svg>
  );
}

function ChinaFlag() {
  return (
    <svg aria-hidden="true" viewBox="0 0 30 20" className="h-5 w-[30px] overflow-hidden rounded-[2px] shadow-sm">
      <rect width="30" height="20" fill="#DE2910" />
      <path d="m5.1 3.1.8 2.5h2.6L6.4 7.1l.8 2.5-2.1-1.5L3 9.6l.8-2.5-2.1-1.5h2.6z" fill="#FFDE00" />
      <circle cx="11.2" cy="3.5" r="0.9" fill="#FFDE00" />
      <circle cx="13.3" cy="5.5" r="0.9" fill="#FFDE00" />
      <circle cx="13.1" cy="8.3" r="0.9" fill="#FFDE00" />
      <circle cx="10.9" cy="10.1" r="0.9" fill="#FFDE00" />
    </svg>
  );
}

function UnitedKingdomFlag() {
  return (
    <svg aria-hidden="true" viewBox="0 0 30 20" className="h-5 w-[30px] overflow-hidden rounded-[2px] shadow-sm">
      <rect width="30" height="20" fill="#012169" />
      <path d="M0 0 30 20M30 0 0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0 30 20M30 0 0 20" stroke="#C8102E" strokeWidth="2.2" />
      <path d="M15 0v20M0 10h30" stroke="#fff" strokeWidth="6" />
      <path d="M15 0v20M0 10h30" stroke="#C8102E" strokeWidth="3.6" />
    </svg>
  );
}

function Flag({ locale }: { locale: Locale }) {
  if (locale === "fr") {
    return <FranceFlag />;
  }

  if (locale === "zh") {
    return <ChinaFlag />;
  }

  return <UnitedKingdomFlag />;
}

type LocaleSwitcherProps = {
  variant?: "dark" | "light";
};

export function LocaleSwitcher({ variant = "dark" }: LocaleSwitcherProps) {
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Home.nav");

  const activeLocale = locales.includes(currentLocale) ? currentLocale : "fr";
  const pathWithoutLocale = pathname.replace(/^\/(fr|zh|en)(?=\/|$)/, "") || "";
  const isLight = variant === "light";

  return (
    <details className="group relative">
      <summary
        aria-label={t("language")}
        className={`flex h-10 cursor-pointer list-none items-center gap-2 border px-3 transition [&::-webkit-details-marker]:hidden ${
          isLight
            ? "border-yi-line bg-white text-yi-ink hover:border-yi-blue hover:bg-yi-porcelain"
            : "border-white/30 bg-white/10 text-white hover:border-yi-gold/70 hover:bg-white/20"
        }`}
      >
        <Flag locale={activeLocale} />
        <ChevronDown size={14} className="transition group-open:rotate-180" />
      </summary>

      <div className="absolute right-0 top-[calc(100%+8px)] z-50 min-w-44 border border-yi-line bg-white p-1 text-yi-ink shadow-2xl shadow-yi-ink/20">
        {locales.map((locale) => {
          const isActive = locale === activeLocale;

          return (
            <button
              key={locale}
              type="button"
              className="flex w-full items-center justify-between gap-4 px-3 py-2.5 text-left text-sm font-semibold text-yi-ink transition hover:bg-yi-porcelain hover:text-yi-blue"
              onClick={() => router.push(`/${locale}${pathWithoutLocale}`)}
            >
              <span className="flex items-center gap-3">
                <Flag locale={locale} />
                {languageNames[locale]}
              </span>
              {isActive ? <Check size={15} className="text-yi-gold" /> : null}
            </button>
          );
        })}
      </div>
    </details>
  );
}
