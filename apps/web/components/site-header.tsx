"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { LocaleSwitcher } from "./locale-switcher";

type NavTheme = "dark" | "light";

export function SiteHeader() {
  const locale = useLocale();
  const t = useTranslations("Home.nav");
  const [theme, setTheme] = useState<NavTheme>("dark");

  useEffect(() => {
    let frame = 0;

    const updateTheme = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-theme]"));
      const probeY = 92;
      const activeSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= probeY && rect.bottom > probeY;
      });

      const nextTheme = activeSection?.dataset.navTheme === "light" ? "light" : "dark";
      setTheme(nextTheme);
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateTheme);
    };

    updateTheme();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const isLight = theme === "light";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <nav
        className={`mx-auto flex h-[72px] max-w-[1440px] items-center justify-between border px-4 shadow-2xl backdrop-blur-xl transition-colors duration-300 md:h-20 md:px-8 ${
          isLight
            ? "border-yi-line bg-white text-yi-ink shadow-yi-ink/10"
            : "border-white/20 bg-yi-ink text-white shadow-yi-ink/30"
        }`}
      >
        <Link href={`/${locale}`} className="flex min-w-0 shrink-0 items-center" aria-label="YICREDIT">
          <img
            src={
              isLight
                ? "/assets/yicredit/brand/logo-yicredit-primary.svg"
                : "/assets/yicredit/brand/logo-yicredit-white.svg"
            }
            alt="YICREDIT"
            className="h-10 w-auto shrink-0 md:h-12"
          />
          {locale === "zh" ? (
            <span
              className={`ml-4 hidden border-l pl-4 text-lg font-semibold tracking-[0.16em] md:inline-flex ${
                isLight ? "border-yi-line text-yi-ink" : "border-white/20 text-white"
              }`}
            >
              易信贷
            </span>
          ) : null}
        </Link>

        <div
          className={`hidden min-w-0 flex-1 items-center justify-center gap-10 px-8 text-[15px] font-bold uppercase leading-none tracking-[0.12em] lg:flex xl:gap-14 xl:text-base ${
            isLight ? "text-yi-ink" : "text-white"
          }`}
        >
          {[
            { href: "#services", label: t("services") },
            { href: "#approach", label: t("approach") },
            { href: "#process", label: t("process") },
            { href: "#contact", label: t("contact") }
          ].map((item) => (
            <a
              key={item.href}
              className={`relative px-2 py-4 transition after:absolute after:inset-x-2 after:bottom-2 after:h-0.5 after:origin-left after:scale-x-0 after:bg-yi-gold after:transition hover:after:scale-x-100 ${
                isLight ? "hover:text-yi-blue" : "hover:text-yi-gold"
              }`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <LocaleSwitcher variant={theme} />
          <a
            href="#contact"
            className={`hidden h-12 items-center gap-2 px-6 text-[13px] font-bold uppercase tracking-[0.12em] transition md:inline-flex ${
              isLight ? "bg-yi-ink text-white hover:bg-yi-blue" : "bg-yi-gold text-yi-ink hover:bg-white"
            }`}
          >
            {t("cta")}
            <ArrowRight size={14} />
          </a>
        </div>
      </nav>
    </header>
  );
}
