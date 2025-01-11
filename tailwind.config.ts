import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#79523a",
        secondary: "#cba809",
        grey: "#f2f2f2",
        deep: "#e6e6e6",
        accent: "#212135",
      },
    },
  },
  plugins: [],
} satisfies Config;
