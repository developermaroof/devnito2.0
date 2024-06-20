/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "dark-theme": "#0E1B2B",
        "light-gray": "#d6d6d6",
        "darker-theme": "#0A1420",
        "lighter-theme": "#101F31",
        textgray: "#7B7A7A",
        "light-theme-bg": "#ffffff", // Add light theme background color
        "light-theme-text": "#000000", // Add light theme text color
        "light-text": "#D0D0D0",
      },

      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
