import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#09090B",
        raised: "#121214",
        card: "#1C1C20",
        line: "#27272A",
        fg: "#F4F4F5",
        sub: "#A1A1AA",
        mute: "#71717A",
        silver: "#C0C0C0",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
