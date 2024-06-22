import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        blue: {
          '50': '#eff4fb',
          '100': '#cddcf3',
          '200': '#b5cbed',
          '300': '#93b4e5',
          '400': '#7ea5e0',
          '500': '#5e8fd8',
          '600': '#436699',
          '700': '#161B29',
          '800': '#040813',
          '900': '#02050D',
        },

        gray: {
          '50': '#e8e8e8',
          '100': '#C9C9C9',
          '200': '#B7B7B7',
          '300': '#949494',
          '400': '#636363',
          '500': '#454545',
          '600': '#2D1E1E',
          '700': '#161616',
          '800': '#121212',
          '900': '#090909',
        },
      },
    },
  },
  plugins: [],
}

export default config
