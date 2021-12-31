module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      "tablet-small": "500px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      "desktop-big": "1440px",
    },
    extend: {},
  },
  plugins: [],
};
