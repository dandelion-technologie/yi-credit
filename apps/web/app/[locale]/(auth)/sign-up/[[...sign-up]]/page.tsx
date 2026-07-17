"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-yi-porcelain px-4 dark:bg-yi-ink">
      <SignUp routing="hash" />
    </div>
  );
}
