/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto, sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
