/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom_red: "#EE4B2B",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      
    },
  },
  plugins: [],
}