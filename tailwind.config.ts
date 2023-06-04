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
        dark_gray: "hsl(0, 0%, 48%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
