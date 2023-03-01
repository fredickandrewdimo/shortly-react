/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#222026",
        violet: "#504673",
        lightGreen: "#30D9C8",
        darkGreen: "#30BF8B",
        semiGray: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
