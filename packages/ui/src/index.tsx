import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type SurfaceProps = HTMLAttributes<HTMLDivElement> & {
  tone?: "default" | "muted" | "accent";
};

export function Surface({ tone = "default", className, ...rest }: SurfaceProps) {
  const tones: Record<NonNullable<SurfaceProps["tone"]>, string> = {
    default: "bg-yi-paper dark:bg-yi-night",
    muted: "bg-yi-porcelain dark:bg-yi-ink",
    accent: "bg-gradient-to-br from-yi-navy via-yi-blue to-yi-steel text-yi-paper"
  };

  return <div className={twMerge("rounded-2xl p-6 shadow-sm ring-1 ring-yi-line", tones[tone], className)} {...rest} />;
}

export function cn(...inputs: Array<string | undefined | false | null>) {
  return twMerge(inputs.filter(Boolean).join(" "));
}
