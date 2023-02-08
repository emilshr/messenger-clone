/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: "#ffffff",
      fontFamily: {
        sans: ["Helvetica Neue", ...fontFamily.sans],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
