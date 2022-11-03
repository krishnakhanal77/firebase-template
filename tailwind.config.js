/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#081627",
        },
        secondary: {
          //  light: "#3B4559",
          DEFAULT: "#009be5",
        },
        grey: {
          light: "#ffffffb3",
          //DEFAULT: "#707070",
        },
      },
    },
  },
  plugins: [],
};
