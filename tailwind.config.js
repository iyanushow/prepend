module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#e4c439",
      },
      gridTemplateColumns: {
        card: "repeat(auto-fit, minmax(240px, 1fr))",
      },
      backgroundImage: {
        hero: "url('/pokemonbanner.jpeg')",
      },
    },
  },
  plugins: [],
};
