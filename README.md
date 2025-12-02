# Yi Credit Monorepo

Turborepo workspace with Next.js 14 (App Router), Expo, shared packages, and the integrations requested (Clerk, next-intl, Tailwind/Ant Design/Radix, React Query/Zustand, UploadThing + S3, Prisma/Postgres, Stripe, OpenAI streaming).

## Layout

- `apps/web` – Next.js web app with App Router, locale segment `app/[locale]/...`, Clerk + next-intl middleware, Tailwind/Ant Design theme, UploadThing and Prisma hooks.
- `apps/mobile` – Expo app using `expo-router`.
- `packages/ui` – Shared UI primitives (Tailwind-ready).
- `packages/utils` – OpenAI/event-stream helpers.
- `prisma` – Shared Prisma schema and seed placeholder.

## Commands

- Install: `npm install`
- Dev all: `npm run dev`
- Web only: `npm run dev --workspace=apps/web`
- Mobile: `npm run start --workspace=apps/mobile`
- Typecheck: `npm run typecheck`
- Lint: `npm run lint`
- Prisma: `npx prisma generate`, `npx prisma db push`, `npx prisma studio`

## Environment

Copy `.env.example` to `.env.local` (not committed) and fill in values for DATABASE_URL, Clerk, S3, UploadThing, OpenAI, Stripe, email, etc. Keep local and deployed envs aligned.

## Notes

- Locale-aware routing via `app/[locale]/...` and `middleware.ts` combines Clerk protection with `next-intl`.
- Tailwind config is shared from the repo root; the web app re-exports it for IDE friendliness.
- UploadThing + S3 presign utilities live in `apps/web/lib`.
- Fonts: Noto Sans SC + ZCOOL KuaiLe preloaded via `next/font`.
