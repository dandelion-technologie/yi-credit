"use client";

import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
      <ClerkLoading>
        <div className="flex h-screen items-center justify-center text-sm text-yi-slate">
          Loading account...
        </div>
      </ClerkLoading>
      <ClerkLoaded>
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
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ConfigProvider>
      </ClerkLoaded>
    </ThemeProvider>
  );
}
