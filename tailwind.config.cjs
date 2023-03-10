/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: "#ffffff",
    },
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
};
