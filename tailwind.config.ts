import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bitcoin-orange': '#f2a900',
        'body-black': '#262626',
        'farhan-black': '#222',
        'mg-red': '#c4211a',
        'wu-yellow': '#FFDD00',
      },
    },
  },
  plugins: [],
};
export default config;
