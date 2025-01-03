/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // add this line
  ],
  theme: {
    extend: {
      colors:{
        'background-Color': 'rgb(249 224 215 )',
        'Bg-button': 'rgb(239,168,141)'

      }
    },
  },
  plugins: [],
}
