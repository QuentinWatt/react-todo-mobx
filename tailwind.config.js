/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#2274A5',
          600: '#1a6591',
        },
        secondary: {
          500: '#e83f6f',
          600: '#c93660',
        },
        tertiary: {
          500: '#32936f',
          600: '#237557',
        },
        quaternary: {
          500: '#ffbf00',
        }
      }
    },
  },
  plugins: [],
}
