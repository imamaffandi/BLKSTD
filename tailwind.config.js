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
        mid: "red",
        light: "#F9FAFB",
        lightest: "#F1F1F1",
        brand: "#FFFFFF",
      },
    },
    plugins: [],
  },
};
