/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          900: '#0c0a09',
          800: '#1c1917',
          700: '#292524',
          600: '#44403c',
        },
        gold: {
          DEFAULT: '#c9a227',
          light: '#e2c044',
          dark: '#9a7b1a',
        },
        cream: '#f5f0e6',
        bordeaux: '#5c1a1b',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #e2c044 0%, #c9a227 50%, #9a7b1a 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}