/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'Arial', 'sans-serif'],
      },
      colors: {
        hp: '#ff6b6b',
        attack: '#ffa94d',
        defense: '#69db7c',
        'special-attack': '#b197fc',
        'special-defense': '#66d9e8',
        speed: '#ffd43b',
      },
    },
  },
  plugins: [],
}