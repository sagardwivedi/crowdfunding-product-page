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
        moderate_cyan: "hsl(176, 50%, 47%)",
        cyan: "hsl(176, 72%, 28%)",
      },
      keyframes: {
        bottom_full: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        border_full: "bottom_full 0.3s forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
