/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "theo": {
          100: "#feeedf",
          200: "#e2cdba",
          300: "#c1aa9c",
          400: "#baa490",
          500: "#988171",
          600: "#79695a",
          700: "#60534a",
          800: "#302923",
          900: "#1d1815"
        }
      }
    },
  fontFamily: {
    sans: ["Inter", "sans-serif"]
  }
  },
  plugins: [],
}
