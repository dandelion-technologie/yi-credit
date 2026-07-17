import type { Config } from "tailwindcss";
import { brandPalette } from "./apps/web/lib/brand-palette";

const config: Config = {
  content: [
    "./apps/web/app/**/*.{ts,tsx}",
    "./apps/web/components/**/*.{ts,tsx}",
    "./packages/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        yi: {
          DEFAULT: brandPalette.navy,
          ...brandPalette
        }
      },
      fontFamily: {
        sans: ["'Noto Sans SC'", "'Inter'", "system-ui", "sans-serif"],
        display: ["'ZCOOL KuaiLe'", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("tailwindcss-animate")]
};

export default config;
