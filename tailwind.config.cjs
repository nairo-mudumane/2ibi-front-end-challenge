/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto, sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue1: "#387ebf",
        blue2: "#b6d7ef",
        blue3: "#2f6da5",

        gray1: "#494949",
        gray2: "#dddddd",
        gray3: "#f8f8f8",

        white1: "#ffffff",
        white2: "#f8f8f8",
      },
    },
  },
  plugins: [],
};
