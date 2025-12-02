import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type SurfaceProps = HTMLAttributes<HTMLDivElement> & {
  tone?: "default" | "muted" | "accent";
};

export function Surface({ tone = "default", className, ...rest }: SurfaceProps) {
  const tones: Record<NonNullable<SurfaceProps["tone"]>, string> = {
    default: "bg-white dark:bg-slate-900",
    muted: "bg-slate-50 dark:bg-slate-800/80",
    accent: "bg-gradient-to-br from-blue-500/90 via-blue-600 to-indigo-600 text-white"
  };

  return <div className={twMerge("rounded-2xl p-6 shadow-sm ring-1 ring-slate-100/70", tones[tone], className)} {...rest} />;
}

export function cn(...inputs: Array<string | undefined | false | null>) {
  return twMerge(inputs.filter(Boolean).join(" "));
}
