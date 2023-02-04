/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#293462',
        'secondary': '#1CD6CE',
        'yellow': '#FEDB39',
        'red': '#D61C4E'
      }
    },
  },
  plugins: [],
}
