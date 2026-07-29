import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  FileText,
  Home,
  Landmark,
  Mail,
  MessageCircle,
  Phone,
  RefreshCw,
  ShieldCheck,
  Utensils,
  WalletCards
} from "lucide-react";
import Image from "next/image";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { ScrollReveal } from "../../components/scroll-reveal";
import { SiteHeader } from "../../components/site-header";

type HomePageProps = {
  params: { locale: string };
};

type HeroStat = {
  value: string;
  label: string;
};

type HeroQuickLink = {
  label: string;
  value: string;
  href: string;
};

type ServiceItem = {
  title: string;
  body: string;
  image: string;
  alt: string;
};

type AdvantageItem = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type WarningCopy = {
  title: string;
  body: string;
};

type ProcessItem = {
  step: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

type PrimaryContact = {
  label: string;
  value: string;
  note: string;
  href: string;
};

type QrContact = {
  label: string;
  lines: string[];
  image?: string;
  imageAlt?: string;
  href?: string;
  action?: string;
};

const serviceIcons = [Home, BriefcaseBusiness, WalletCards, Utensils, CheckCircle2, RefreshCw, Landmark, FileText];
const processIcons = [Phone, MessageCircle, FileText, Landmark];

export default async function HomePage({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Home" });

  const heroStats = t.raw("hero.stats") as HeroStat[];
  const heroQuickLinks = t.raw("hero.quickLinks") as HeroQuickLink[];
  const advantages = t.raw("advantages.items") as AdvantageItem[];
  const services = t.raw("services.items") as ServiceItem[];
  const warning = t.raw("warning") as WarningCopy;
  const processSteps = t.raw("process.items") as ProcessItem[];
  const primaryContacts = t.raw("contact.primary") as PrimaryContact[];
  const qrContacts = t.raw("contact.qrChannels") as QrContact[];

  return (
    <main className="bg-yi-paper text-yi-ink">
      <ScrollReveal />
      <SiteHeader />

      <section data-nav-theme="dark" className="relative isolate min-h-[100svh] overflow-hidden bg-yi-ink text-white">
        <video
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/yicredit/hero/hero-finance-consultation-desktop.webp"
          aria-hidden="true"
        >
          <source src="/assets/yicredit/video/hero-finance-consultation-desktop.mp4" type="video/mp4" />
        </video>
        <Image
          src="/assets/yicredit/hero/hero-finance-consultation-mobile.webp"
          alt=""
          width={1200}
          height={1600}
          className="absolute inset-0 h-full w-full object-cover md:hidden"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,23,46,0.94),rgba(5,23,46,0.76)_44%,rgba(5,23,46,0.22))]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-yi-ink to-transparent" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-5 pb-5 pt-28 md:px-8 md:pb-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_430px] lg:items-end">
            <div className="max-w-5xl pb-4 md:pb-8">
              <div className="motion-fly-left flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.32em] text-yi-gold">
                <span className="h-px w-12 bg-yi-gold" />
                {t("hero.eyebrow")}
              </div>
              <h1 className="motion-fly-left motion-delay-1 mt-6 max-w-5xl font-serif text-[2.8rem] font-semibold leading-[1.06] tracking-normal text-white md:text-6xl lg:text-7xl">
                {t("hero.headline")}
              </h1>
              <p className="motion-fly-left motion-delay-2 mt-7 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
                {t("hero.subhead")}
              </p>

              <div className="motion-fly-up motion-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center gap-2 bg-white px-7 text-xs font-bold uppercase tracking-[0.18em] text-yi-ink transition hover:bg-yi-gold"
                >
                  {t("hero.primaryCta")}
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#services"
                  className="inline-flex h-12 items-center justify-center border border-white/40 px-7 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white/10"
                >
                  {t("hero.secondaryCta")}
                </a>
              </div>
            </div>

            <aside className="motion-fly-right motion-delay-4 border border-white/25 bg-yi-ink/60 p-5 shadow-2xl shadow-yi-ink/40 backdrop-blur-2xl md:p-6">
              <div className="flex items-start justify-between gap-6 border-b border-white/25 pb-5">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-yi-gold">
                    {t("hero.panelEyebrow")}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight">{t("hero.panelTitle")}</h2>
                </div>
                <ShieldCheck className="mt-1 shrink-0 text-yi-gold" size={28} aria-hidden="true" />
              </div>

              <dl className="mt-2 grid">
                {heroStats.map((stat) => (
                  <div key={stat.value} className="grid grid-cols-[1fr_auto] gap-4 border-b border-white/20 py-4">
                    <dt className="text-sm leading-6 text-white/70">{stat.label}</dt>
                    <dd className="text-right text-base font-semibold text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          <div className="motion-fly-up motion-delay-4 mt-8 grid border-y border-white/20 bg-yi-ink/25 backdrop-blur-xl md:grid-cols-3">
            {heroQuickLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex min-h-24 items-center justify-between gap-4 border-white/20 px-5 py-5 transition hover:bg-white/10 md:border-r md:last:border-r-0"
              >
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.28em] text-yi-gold">
                    {item.label}
                  </span>
                  <span className="mt-2 block text-base font-semibold text-white">{item.value}</span>
                </span>
                <ArrowRight className="shrink-0 text-white/50 transition group-hover:translate-x-1 group-hover:text-white" size={18} />
              </a>
            ))}
          </div>

          <a
            href="#intro"
            className="mt-5 hidden w-fit items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-white/60 transition hover:text-white md:inline-flex"
          >
            {t("hero.scroll")}
            <ChevronDown size={14} />
          </a>
        </div>
      </section>

      <section data-nav-theme="light" id="intro" className="overflow-hidden bg-yi-paper px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div data-reveal="left">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-yi-blue">{t("intro.eyebrow")}</p>
            <h2 className="mt-5 max-w-xl font-serif text-4xl font-semibold leading-tight text-yi-ink md:text-6xl">
              {t("intro.title")}
            </h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-yi-slate md:text-lg">{t("intro.body")}</p>
          </div>

          <div data-reveal="right" className="relative">
            <Image
              src="/assets/yicredit/hero/hero-paris-business-address.webp"
              alt={t("intro.imageAlt")}
              width={2400}
              height={1350}
              className="aspect-[16/9] w-full object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-yi-ink/60 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-sm border border-white/20 bg-yi-ink/90 p-6 shadow-xl shadow-yi-ink/25 backdrop-blur-md">
              <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-yi-gold">{t("intro.captionEyebrow")}</p>
              <p className="mt-3 text-sm leading-7 text-white/90">{t("intro.caption")}</p>
            </div>
          </div>
        </div>
      </section>

      <section data-nav-theme="light" id="advantages" className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div data-reveal="left" className="lg:sticky lg:top-32">
            <h2 className="max-w-xl font-serif text-4xl font-semibold leading-tight text-yi-ink md:text-6xl">
              {t("advantages.title")}
            </h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-yi-slate md:text-lg">{t("advantages.summary")}</p>
          </div>

          <div data-reveal="right" className="border border-yi-line bg-yi-paper p-6 shadow-2xl shadow-yi-ink/10 md:p-9">
            {advantages.slice(0, 1).map((item) => (
              <article key={item.title}>
                <h3 className="text-2xl font-semibold leading-tight text-yi-ink">{item.title}</h3>
                <div className="mt-5 space-y-4 text-base leading-8 text-yi-slate">
                  {item.paragraphs.map((paragraph, index) => (
                    <p key={`${item.title}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}

            <details className="group mt-8 border-t border-yi-line pt-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold uppercase tracking-[0.18em] text-yi-blue transition hover:text-yi-ink [&::-webkit-details-marker]:hidden">
                {t("advantages.expand")}
                <ChevronDown size={18} className="shrink-0 transition group-open:rotate-180" />
              </summary>
              <div className="mt-8 grid gap-8">
                {advantages.slice(1).map((item) => (
                  <article key={item.title} className="border-t border-yi-line pt-7 first:border-t-0 first:pt-0">
                    <h3 className="text-xl font-semibold leading-tight text-yi-ink">{item.title}</h3>
                    <div className="mt-4 space-y-4 text-base leading-8 text-yi-slate">
                      {item.paragraphs.map((paragraph, index) => (
                        <p key={`${item.title}-${index}`}>{paragraph}</p>
                      ))}
                      {item.bullets ? (
                        <ul className="grid gap-2 pl-5">
                          {item.bullets.map((bullet) => (
                            <li key={bullet} className="list-disc">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </details>
          </div>
        </div>
      </section>

      <section data-nav-theme="light" id="services" className="bg-yi-porcelain px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div data-reveal="up" className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-yi-blue">{t("services.eyebrow")}</p>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-yi-ink md:text-6xl">
              {t("services.title")}
            </h2>
            <p className="mt-6 text-base leading-8 text-yi-slate">{t("services.body")}</p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] ?? CheckCircle2;
              const columnClass = index < 2 ? "xl:col-span-3" : "xl:col-span-2";

              return (
                <a
                  key={service.title}
                  href="#contact"
                  data-reveal="up"
                  style={{ transitionDelay: `${index * 70}ms` }}
                  className={`group relative min-h-[430px] overflow-hidden bg-yi-ink text-white ${columnClass}`}
                >
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={1800}
                    height={1200}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yi-ink via-yi-ink/50 to-transparent" />
                  <div className="relative flex h-full min-h-[430px] flex-col justify-end p-7 md:p-8">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center border border-yi-gold/60 bg-yi-ink/60 text-yi-gold backdrop-blur-sm">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-4 max-w-md text-sm leading-7 text-white/75">{service.body}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <div data-reveal="up" className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-yi-ink px-7 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-yi-blue"
            >
              {t("services.moreCta")}
              <ArrowRight size={16} />
            </a>
          </div>

          <div data-reveal="up" className="mt-8 border border-yi-gold/50 bg-white p-6 shadow-xl shadow-yi-ink/10 md:p-8">
            <p className="text-xl font-semibold leading-8 text-yi-ink">{warning.title}</p>
            <p className="mt-3 text-lg leading-8 text-yi-slate">{warning.body}</p>
          </div>
        </div>
      </section>

      <section data-nav-theme="light" id="process" className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div data-reveal="up" className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-yi-blue">{t("process.eyebrow")}</p>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-yi-ink md:text-6xl">
              {t("process.title")}
            </h2>
            <p className="mt-6 text-base leading-8 text-yi-slate">{t("process.body")}</p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = processIcons[index] ?? CheckCircle2;

              return (
                <article
                  key={step.step}
                  data-reveal="up"
                  style={{ transitionDelay: `${index * 80}ms` }}
                  className="group border border-yi-line bg-yi-paper"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      width={1600}
                      height={1000}
                      className="aspect-[8/5] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <p className="absolute bottom-0 left-0 bg-yi-ink px-5 py-3 text-sm font-bold uppercase tracking-[0.24em] text-yi-gold">
                      {step.step}
                    </p>
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="flex h-11 w-11 items-center justify-center border border-yi-blue/20 bg-white text-yi-blue shadow-lg shadow-yi-ink/5">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-yi-ink">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-yi-slate">{step.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section data-nav-theme="dark" id="contact" className="relative isolate overflow-hidden bg-yi-ink px-5 py-20 text-white md:px-8 md:py-28">
        <Image
          src="/assets/yicredit/contact/contact-card-background.webp"
          alt=""
          width={2400}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-yi-ink/30" />

        <div className="relative mx-auto max-w-[1280px]">
          <div data-reveal="left" className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-yi-gold">{t("contact.eyebrow")}</p>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight md:text-6xl">{t("contact.title")}</h2>
            <p className="mt-7 text-base leading-8 text-white/80 md:text-lg">{t("contact.body")}</p>
          </div>

          <div data-reveal="up" className="mt-10 grid gap-4 md:grid-cols-2">
            {primaryContacts.map((contact, index) => {
              const Icon = index === 0 ? Phone : Mail;

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="group flex min-h-40 flex-col justify-between border border-white/25 bg-white p-6 text-yi-ink shadow-2xl shadow-yi-ink/25 transition hover:border-yi-gold hover:bg-yi-paper md:p-8"
                >
                  <span className="flex items-center justify-between gap-5">
                    <span className="flex size-12 items-center justify-center bg-yi-ink text-yi-gold">
                      <Icon size={23} />
                    </span>
                    <ArrowRight className="text-yi-slate transition group-hover:translate-x-1 group-hover:text-yi-blue" size={20} />
                  </span>
                  <span className="mt-8 block">
                    <span className="block text-[12px] font-bold uppercase tracking-[0.24em] text-yi-blue">
                      {contact.label}
                    </span>
                    <span className="mt-3 block break-words text-2xl font-semibold leading-tight md:text-3xl">
                      {contact.value}
                    </span>
                    <span className="mt-3 block text-sm leading-6 text-yi-slate">{contact.note}</span>
                  </span>
                </a>
              );
            })}
          </div>

          <div data-reveal="up" className="mt-12 border-t border-white/20 pt-8">
            <p className="text-xl font-semibold text-white">{t("contact.qrTitle")}</p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/65">{t("contact.qrBody")}</p>

            <div className="mt-6 grid max-w-5xl gap-4 lg:grid-cols-2">
              {qrContacts.map((contact) => (
                <article
                  key={contact.label}
                  className="grid gap-5 border border-white/15 bg-white p-5 text-yi-ink shadow-xl shadow-yi-ink/20 sm:grid-cols-[180px_1fr] sm:items-center md:p-6"
                >
                  <div className="flex aspect-square items-center justify-center border border-yi-line bg-white p-2">
                    <Image
                      src={contact.image ?? ""}
                      alt={contact.imageAlt ?? contact.label}
                      width={1000}
                      height={1000}
                      className="aspect-square w-full object-contain"
                    />
                  </div>
                  <div className="border-t border-yi-line pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                    <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-yi-blue">{contact.label}</p>
                    <p className="mt-3 text-base font-semibold leading-7 text-yi-ink">
                      {contact.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                    {contact.href && contact.action ? (
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex h-10 items-center gap-2 bg-yi-ink px-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-yi-blue"
                      >
                        {contact.action}
                        <ArrowRight size={14} />
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-yi-ink px-5 py-10 text-white md:px-8">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <img src="/assets/yicredit/brand/logo-yicredit-white.svg" alt="YICREDIT" className="h-9 w-auto" />
            <p className="mt-5 text-sm font-semibold text-white">{t("footer.company")}</p>
            <p className="mt-2 text-xs leading-6 text-white/60">{t("footer.license")}</p>
          </div>
          <p className="max-w-xl text-xs leading-6 text-white/50">{t("footer.note")}</p>
        </div>
      </footer>
    </main>
  );
}
