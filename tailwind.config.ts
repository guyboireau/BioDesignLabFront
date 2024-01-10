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
      colors: {
        primary: {
          DEFAULT: '#140821',
          dark: '#140821',
          light: '#F2F2F2',
        },
        secondary: {
          DEFAULT: '#76E581',
          dark: '#76E581',
          light: '#E0E0E0',
        },
        tertiary: {
          DEFAULT: '#002266',
          dark: '#002266',
          light: '#E5C676',
        },
        quaternary: {
          DEFAULT: '#65AFFF',
          dark: '#65AFFF',
          light: '#F2F2F2',
        },
        quinary: {
          DEFAULT: '#E5EBF0',
          dark: '#E5EBF0',
          light: '#F2F2F2',
        },
        light: {
          DEFAULT: '#F2F2F2',
          dark: '#F2F2F2',
          light: '#F2F2F2',
        },
        dark: {
          DEFAULT: '#333333',
          dark: '#333333',
          light: '#F2F2F2',
        },
        black: {
          DEFAULT: '#000000',
          dark: '#000000',
          light: '#F2F2F2',
        },
        white: {
          DEFAULT: '#FFFFFF',
          dark: '#FFFFFF',
          light: '#F2F2F2',
        },
      },
    },
  },
  plugins: [],
};
export default config;
