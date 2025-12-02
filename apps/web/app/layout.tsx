import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_SC, ZCOOL_KuaiLe } from "next/font/google";

const sans = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"]
});

const display = ZCOOL_KuaiLe({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Yi Credit Platform",
  description: "Next 14 + Expo monorepo with Clerk, intl, Tailwind and more."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
