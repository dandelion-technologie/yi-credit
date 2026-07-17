"use client";

import { Select } from "antd";
import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { locales } from "../lib/locales";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Home");

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-yi-slate">{t("featureLabel")}</span>
      <Select
        size="small"
        value={locale}
        onChange={(value) => router.push(`/${value}${pathname.substring(3) || ""}`)}
        options={locales.map((loc) => ({ label: loc.toUpperCase(), value: loc }))}
      />
    </div>
  );
}
