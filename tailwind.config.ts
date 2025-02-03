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
        jetBrains: ['"JetBrains Mono"', 'monospace'], // Custom font family
      },
      screens: {
        small: { max: "440px" },
        mobile: { max: "768px" },
        tablet: { min: "768px", max: "1024px" },
        desktop: { min: "1025px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
