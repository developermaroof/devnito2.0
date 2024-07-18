/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "dark-theme": "#0E1B2B",
        "darker-theme": "#0A1420",
        "lighter-theme": "#101F31",
        textgray: "#7B7A7A",
        "light-theme": "#EFECEC",
        "light-theme-black": "#1E1E1E",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
