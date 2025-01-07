/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FFE602"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

