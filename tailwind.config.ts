import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
      fontFamily: {
        'noto-sans': ['var(--font-noto-sans)'],
      },
      colors: {
        'light-green': { DEFAULT: '#76E581', dark: '#76E581' },
        'royal-blue': { DEFAULT: '#002266', dark: '#002266' },
        'argentinian-blue': { DEFAULT: '#65AFFF', dark: '#65AFFF' },
        'alice-gray': { DEFAULT: '#E5EBF0', dark: '#E5EBF0' },
        'dark-blue': { DEFAULT: '#140821', dark: '#140821' },
      },
    },
  },
  plugins: [],
}
export default config
