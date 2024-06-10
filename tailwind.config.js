/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkest: "#0e0e0e",
        dark: "#1D1C29",
        light: "#F1F8E8",
        lightest: "#F1F1F1",
      },
    },
    plugins: [],
  },
};
