/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        Brightorange: "hsl(31, 77%, 52%)",
        Darkcyan: "hsl(184, 100%, 22%)",
        Verydarkcyan: "hsl(179, 100%, 13%)"
      },
      fontFamily: {
        "bsd": ['Big Shoulders Display', "cursive"],
        "ld": ['Lexend Deca', "sans-serrif"]
      },
      screens: {
        desktop: "1125px"
      }
    },
  },
  plugins: [],
}
