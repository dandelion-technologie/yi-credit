"use client";

import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { ConfigProvider, theme } from "antd";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
        <div className="flex h-screen items-center justify-center text-sm text-slate-500">
          Loading account...
        </div>
      </ClerkLoading>
      <ClerkLoaded>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
            token: {
              colorPrimary: "#2563eb",
              colorSuccess: "#10b981",
              colorInfo: "#0ea5e9",
              colorWarning: "#f59e0b",
              colorError: "#ef4444",
              borderRadius: 10
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
