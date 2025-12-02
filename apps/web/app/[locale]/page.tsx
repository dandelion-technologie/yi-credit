import Link from "next/link";
import { Button, Card, Col, Divider, List, Row, Statistic, Tabs, Tag } from "antd";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { LocaleSwitcher } from "../../components/locale-switcher";

export default async function HomePage() {
  const t = await getTranslations("Home");
  const features = t.raw("features") as Array<{ title: string; body: string; tag: string }>;

  return (
    <main className="space-y-10 px-6 py-12 lg:px-12">
      <section className="mx-auto max-w-6xl rounded-3xl bg-white/70 p-10 shadow-lg ring-1 ring-slate-100 backdrop-blur-sm dark:bg-slate-900/50 dark:ring-slate-800">
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={14}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-100 dark:bg-blue-500/10 dark:text-blue-100 dark:ring-blue-500/30">
              <Sparkles size={16} />
              {t("badge")}
            </div>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-slate-50">
              {t("headline")}
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{t("subhead")}</p>
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
            <p className="text-sm uppercase tracking-wide text-blue-500">{t("featureLabel")}</p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
              {t("featureTitle")}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <LocaleSwitcher />
            <Link href="/api/health" className="text-blue-600 hover:underline">
              {t("featureLink")}
            </Link>
          </div>
        </div>
        <Row gutter={[20, 20]}>
          {features.map((feature) => (
            <Col key={feature.title} xs={24} md={8}>
              <Card
                title={<span className="font-semibold">{feature.title}</span>}
                extra={<Tag color="processing">{feature.tag}</Tag>}
              >
                <p className="text-sm text-slate-600 dark:text-slate-300">{feature.body}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="mx-auto max-w-6xl rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-8 text-slate-800 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-50">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-lg font-medium">
            <ShieldCheck className="text-blue-500" />
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

      <section className="mx-auto max-w-6xl rounded-2xl bg-white/70 p-8 shadow ring-1 ring-slate-100 dark:bg-slate-900/50 dark:ring-slate-800">
        <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-50">
          {t("stack.title")}
        </h3>
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={t.raw("stack.items") as string[]}
          renderItem={(item) => (
            <List.Item>
              <Card size="small" className="h-full">
                <div className="flex h-full flex-col justify-between gap-2">
                  <span>{item}</span>
                  <Button type="link" href="#" disabled>
                    {t("stack.link")}
                  </Button>
                </div>
              </Card>
            </List.Item>
          )}
        />
      </section>
    </main>
  );
}
