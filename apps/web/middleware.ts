import createIntlMiddleware from "next-intl/middleware";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import intlConfig from "./next-intl.config";

const intlMiddleware = createIntlMiddleware(intlConfig);

const isPublicRoute = createRouteMatcher([
  "/",
  "/:locale",
  "/:locale/(auth)(.*)",
  "/:locale/public(.*)",
  "/api/(.*)"
]);

const clerkEnabled = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY);

const authMiddleware = clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth().protect();
  }

  return intlMiddleware(req);
});

export default function middleware(req: NextRequest, event: NextFetchEvent) {
  if (!clerkEnabled) {
    return intlMiddleware(req);
  }

  return authMiddleware(req, event);
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"]
};
