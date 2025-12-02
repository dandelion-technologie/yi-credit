import createIntlMiddleware from "next-intl/middleware";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import intlConfig from "./next-intl.config";

const intlMiddleware = createIntlMiddleware(intlConfig);

const isPublicRoute = createRouteMatcher([
  "/",
  "/:locale",
  "/:locale/(auth)(.*)",
  "/:locale/public(.*)",
  "/api/(.*)"
]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth().protect();
  }

  return intlMiddleware(req);
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"]
};
