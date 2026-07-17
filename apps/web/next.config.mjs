import createNextIntlPlugin from "next-intl/plugin";

// Use the default plugin setup so Next.js injects the virtual `next-intl/config` module.
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  }
};

export default withNextIntl(nextConfig);
