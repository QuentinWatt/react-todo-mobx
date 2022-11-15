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
        },
        secondary: {
          500: '#e83f6f',
        },
        tertiary: {
          500: '#32936f',
        },
        quaternary: {
          500: '#ffbf00',
        }
      }
    },
  },
  plugins: [],
}
