const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        xxs: "12rem",
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      },
    },
  },
  plugins: [],
})
