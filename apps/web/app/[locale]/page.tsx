import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
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

type TextBlock = {
  title: string;
  body: string;
};

type ServiceItem = {
  title: string;
  body: string;
  image: string;
  alt: string;
};

type ProcessItem = {
  step: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

type ContactChannel = {
  label: string;
  value: string;
};

const serviceIcons = [Home, BriefcaseBusiness, Utensils, WalletCards, RefreshCw, Landmark];
const processIcons = [MessageCircle, FileText, Landmark, ClipboardCheck];

export default async function HomePage({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Home" });

  const heroStats = t.raw("hero.stats") as HeroStat[];
  const heroQuickLinks = t.raw("hero.quickLinks") as HeroQuickLink[];
  const editorialItems = t.raw("editorial.items") as TextBlock[];
  const assuranceItems = t.raw("assurance.items") as TextBlock[];
  const services = t.raw("services.items") as ServiceItem[];
  const processSteps = t.raw("process.items") as ProcessItem[];
  const contactChannels = t.raw("contact.channels") as ContactChannel[];

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

      <section data-nav-theme="dark" id="approach" className="bg-yi-ink px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[1fr_1fr]">
          <div data-reveal="left">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-yi-gold">{t("editorial.eyebrow")}</p>
            <h2 className="mt-5 max-w-xl font-serif text-4xl font-semibold leading-tight md:text-6xl">
              {t("editorial.title")}
            </h2>
          </div>
          <div className="grid gap-8">
            {editorialItems.map((item, index) => (
              <article
                key={item.title}
                data-reveal="right"
                style={{ transitionDelay: `${index * 90}ms` }}
                className="grid gap-5 border-t border-white/20 pt-7 sm:grid-cols-[80px_1fr]"
              >
                <p className="font-serif text-4xl text-yi-gold">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{item.body}</p>
                </div>
              </article>
            ))}
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
              const isWide = index === 0 || index === 2;

              return (
                <article
                  key={service.title}
                  data-reveal="up"
                  style={{ transitionDelay: `${index * 70}ms` }}
                  className={`group relative min-h-[430px] overflow-hidden bg-yi-ink text-white ${
                    isWide ? "xl:col-span-3" : "xl:col-span-2"
                  }`}
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
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section data-nav-theme="light" className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div data-reveal="left" className="grid gap-5 sm:grid-cols-2">
            <Image
              src="/assets/yicredit/services/service-equipment-detail.webp"
              alt={t("assurance.imageAltPrimary")}
              width={1800}
              height={1200}
              className="aspect-[3/4] h-full w-full object-cover"
            />
            <Image
              src="/assets/yicredit/process/process-documents.webp"
              alt={t("assurance.imageAltSecondary")}
              width={1600}
              height={1000}
              className="aspect-[3/4] h-full w-full translate-y-8 object-cover sm:translate-y-12"
            />
          </div>

          <div data-reveal="right" className="lg:pl-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-yi-blue">{t("assurance.eyebrow")}</p>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-yi-ink md:text-6xl">
              {t("assurance.title")}
            </h2>
            <p className="mt-7 text-base leading-8 text-yi-slate md:text-lg">{t("assurance.body")}</p>

            <div className="mt-9 grid gap-5">
              {assuranceItems.map((item, index) => {
                const Icon = index === 0 ? BadgeCheck : index === 1 ? ShieldCheck : CheckCircle2;

                return (
                  <article key={item.title} className="grid grid-cols-[44px_1fr] gap-4 border-t border-yi-line pt-5">
                    <div className="flex h-11 w-11 items-center justify-center bg-yi-porcelain text-yi-blue">
                      <Icon size={21} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-yi-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-yi-slate">{item.body}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section data-nav-theme="light" id="process" className="bg-yi-porcelain px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div data-reveal="up" className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-yi-blue">{t("process.eyebrow")}</p>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-yi-ink md:text-6xl">
              {t("process.title")}
            </h2>
            <p className="mt-6 text-base leading-8 text-yi-slate">{t("process.body")}</p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-yi-line bg-yi-line lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = processIcons[index] ?? CheckCircle2;

              return (
                <article
                  key={step.step}
                  data-reveal="up"
                  style={{ transitionDelay: `${index * 80}ms` }}
                  className="group bg-white"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      width={1600}
                      height={1000}
                      className="aspect-[8/5] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center bg-white/90 text-yi-blue shadow-lg shadow-yi-ink/10">
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="p-6 md:p-7">
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-yi-gold">{step.step}</p>
                    <h3 className="mt-4 text-xl font-semibold text-yi-ink">{step.title}</h3>
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

        <div className="relative mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1fr_430px] lg:items-center">
          <div data-reveal="left" className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-yi-gold">{t("contact.eyebrow")}</p>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight md:text-6xl">{t("contact.title")}</h2>
            <p className="mt-7 text-base leading-8 text-white/80 md:text-lg">{t("contact.body")}</p>

            <div className="mt-10 grid gap-px overflow-hidden border border-white/20 bg-white/10 sm:grid-cols-3">
              {contactChannels.map((channel, index) => {
                const Icon = index === 0 ? Phone : index === 1 ? Mail : MessageCircle;

                return (
                  <div key={channel.label} className="bg-yi-ink/60 p-5 backdrop-blur-md">
                    <Icon className="text-yi-gold" size={22} />
                    <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-white/50">{channel.label}</p>
                    <p className="mt-2 break-words text-sm font-semibold leading-6">{channel.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <aside data-reveal="right" className="bg-white p-5 text-center text-yi-ink shadow-2xl shadow-yi-ink/40 md:p-6">
            <Image
              src="/assets/yicredit/contact/qr-wechat-mr-victor.png"
              alt={t("contact.qrAlt")}
              width={1000}
              height={1000}
              className="mx-auto aspect-square w-full max-w-[320px] object-contain"
            />
            <p className="mx-auto mt-5 max-w-xs text-sm font-semibold leading-6">{t("contact.cta")}</p>
          </aside>
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
