/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand','sans-serif']
      },
      colors: {
      'marine-blue': '#314755',
      'sky-blue': '#26A0DA'
      }
    },
  },
  plugins: [],
}
