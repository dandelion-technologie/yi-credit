import baseConfig from "../../tailwind.config";

const config = {
  ...baseConfig,
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "../../packages/**/*.{ts,tsx}"]
};

export default config;
