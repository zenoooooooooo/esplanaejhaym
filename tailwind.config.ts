import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        jetBrains: ['"JetBrains Mono"', "monospace"],
      },
      screens: {
        small: { max: "440px" },
        mobile: { min: "441px", max: "767px" },
        tablet: { min: "769px", max: "1024px" },
        desktop: { min: "1025px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
