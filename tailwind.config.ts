import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./apps/web/app/**/*.{ts,tsx}",
    "./apps/web/components/**/*.{ts,tsx}",
    "./packages/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Noto Sans SC'", "'Inter'", "system-ui", "sans-serif"],
        display: ["'ZCOOL KuaiLe'", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("tailwindcss-animate")]
};

export default config;
