/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'780px',
      lg:'976px',
      xl:'1440px',


    },
    extend: {
      
    },
  },
  plugins: [],
}
