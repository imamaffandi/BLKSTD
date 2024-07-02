/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkest: "#0e0e0e",
        dark: "#282828",
        mid: "#333333",
        light: "#C0C3D0",
        lightest: "#F1F1F1",
      },
    },
    plugins: [],
  },
};
