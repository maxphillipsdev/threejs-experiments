/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "false",
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      black: "#000",
      white: "#fff",
      gray: {
        dark: "#222222",
        light: "#888888",
      },
    },
    plugins: [
      // Typography
      require("@tailwindcss/typography"),
    ],
  },
};
