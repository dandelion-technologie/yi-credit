"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-yi-porcelain px-4 dark:bg-yi-ink">
      <SignIn routing="hash" />
    </div>
  );
}
