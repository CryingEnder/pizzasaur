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
    extend: {
      colors: {
        red: {
          dark: "#693f48",
          darker: "#50353b",
          darkest: "#432c31",
        },
        white: {
          "faded-50": "rgba(255, 255, 255, 0.7)",
          pure: "rgba(255, 255, 255)",
        },
      },
      fontFamily: {
        josefin: ["josefin-sans"],
        maven: ["maven-pro"],
      },
      keyframes: {
        "opacity-slow": {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        "opacity-slow": "opacity-slow .2s ease-in-out",
      },
    },
    fontFamily: {
      text: [
        "josefin-sans",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      ui: [
        "maven-pro",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [],
};
