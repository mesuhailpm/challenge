/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding:{
        '19' : '4.75rem'
      },
      fontFamily:{
        'ralway': ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}
