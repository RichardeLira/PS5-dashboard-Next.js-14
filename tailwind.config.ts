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

      keyframes: {
        pulseWidth: {
          '0%, 100%': { width: '0.5rem' },
          '50%': { width: '105%' },
        },
      },

      animation: {
        pulseWidth: 'pulseWidth 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
