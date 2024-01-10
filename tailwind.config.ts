import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ["var(--font-noto-sans)"],
      },
      colors: {
        "dark-purple": { DEFAULT: "#140821", dark: "#140821" },
        "light-green": { DEFAULT: "#76E581", dark: "#76E581" },
        "royal-blue": { DEFAULT: "#002266", dark: "#002266" },
        "argentinian-blue": { DEFAULT: "#65AFFF", dark: "#65AFFF" },
        "alice-gray": { DEFAULT: "#E5EBF0", dark: "#E5EBF0" },
      
      },
    },
  },
  plugins: [],
};
export default config;
