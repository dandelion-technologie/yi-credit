import { Button, Card, Col, Divider, Row, Statistic, Tabs, Tag } from "antd";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { LocaleSwitcher } from "../../components/locale-switcher";
import { brandPalette } from "../../lib/brand-palette";

type HomePageProps = {
  params: { locale: string };
};

export default async function HomePage({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Home" });
  const features = t.raw("features") as Array<{ title: string; body: string; tag: string }>;
  const stackItems = t.raw("stack.items") as string[];

  return (
    <main className="space-y-10 px-6 py-12 lg:px-12">
      <section className="mx-auto max-w-6xl rounded-3xl bg-yi-paper/80 p-10 shadow-lg ring-1 ring-yi-line backdrop-blur-sm dark:bg-yi-night/80 dark:ring-yi-steel">
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={14}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yi-mist px-4 py-1 text-sm font-medium text-yi-navy ring-1 ring-yi-line dark:bg-yi-blue/20 dark:text-yi-mist dark:ring-yi-steel">
              <Sparkles size={16} />
              {t("badge")}
            </div>
            <h1 className="text-4xl font-bold leading-tight text-yi-ink dark:text-yi-paper">
              {t("headline")}
            </h1>
            <p className="mt-4 text-lg text-yi-slate dark:text-yi-mist">{t("subhead")}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button type="primary" size="large">
                {t("primaryCta")}
              </Button>
              <Button size="large" href="https://clerk.com" target="_blank">
                Clerk
              </Button>
              <Button size="large" href="https://next-intl-docs.vercel.app" target="_blank">
                next-intl
              </Button>
            </div>
          </Col>
          <Col xs={24} md={10}>
            <Card className="shadow-lg">
              <Statistic title={t("stats.users")} value={12800} suffix={t("stats.suffix")} />
              <Divider />
              <Tabs
                items={[
                  { key: "1", label: "Realtime", children: <p>{t("stats.realtime")}</p> },
                  { key: "2", label: "AI", children: <p>{t("stats.ai")}</p> },
                  { key: "3", label: "Payments", children: <p>{t("stats.payments")}</p> }
                ]}
              />
            </Card>
          </Col>
        </Row>
      </section>

      <section className="mx-auto max-w-6xl space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-wide text-yi-blue">{t("featureLabel")}</p>
            <h2 className="text-2xl font-semibold text-yi-ink dark:text-yi-paper">
              {t("featureTitle")}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <LocaleSwitcher />
            <Link href="/api/health" className="text-yi-blue hover:underline">
              {t("featureLink")}
            </Link>
          </div>
        </div>
        <Row gutter={[20, 20]}>
          {features.map((feature) => (
            <Col key={feature.title} xs={24} md={8}>
              <Card
                title={<span className="font-semibold">{feature.title}</span>}
                extra={<Tag color={brandPalette.blue}>{feature.tag}</Tag>}
              >
                <p className="text-sm text-yi-slate dark:text-yi-mist">{feature.body}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="mx-auto max-w-6xl rounded-2xl border border-dashed border-yi-gold bg-yi-mist p-8 text-yi-ink dark:border-yi-gold dark:bg-yi-night dark:text-yi-mist">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-lg font-medium">
            <ShieldCheck className="text-yi-gold" />
            {t("cta.title")}
          </div>
          <div className="flex gap-3">
            <Button type="primary" href="/dashboard">
              {t("cta.primary")}
            </Button>
            <Button href="https://turbo.build" target="_blank" icon={<ArrowRight size={16} />}>
              Turborepo
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl rounded-2xl bg-yi-paper/80 p-8 shadow ring-1 ring-yi-line dark:bg-yi-night/80 dark:ring-yi-steel">
        <h3 className="mb-4 text-xl font-semibold text-yi-ink dark:text-yi-paper">
          {t("stack.title")}
        </h3>
        <Row gutter={[16, 16]}>
          {stackItems.map((item) => (
            <Col key={item} xs={24} md={8}>
              <Card size="small" className="h-full">
                <div className="flex h-full flex-col justify-between gap-2">
                  <span>{item}</span>
                  <Button type="link" href="#" disabled>
                    {t("stack.link")}
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </main>
  );
}
