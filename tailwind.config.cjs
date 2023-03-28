/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vava': '#ece8e1',
        'verm': '#ff4655',
      },
      fontFamily: {
        raj: 'Rajdhani',
        fira: 'Fira Sans'      
      }
    },
  },
  plugins: [],
}