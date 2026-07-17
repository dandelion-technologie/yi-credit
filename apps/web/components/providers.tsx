"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider, theme } from "antd";
import { ThemeProvider } from "next-themes";
import { useState } from "react";

import { brandPalette } from "../lib/brand-palette";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 1
          }
        }
      })
  );

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: brandPalette.navy,
            colorSuccess: brandPalette.steel,
            colorInfo: brandPalette.blue,
            colorWarning: brandPalette.gold,
            colorError: brandPalette.bronze,
            colorTextBase: brandPalette.ink,
            colorBgBase: brandPalette.paper,
            colorBorder: brandPalette.line,
            borderRadius: 8
          }
        }}
      >
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ConfigProvider>
    </ThemeProvider>
  );
}
