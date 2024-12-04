/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#393e46",
        tertiary: "#65e892",
        secondary: "#ff7e67",
        light: "#f7f7f7",
        tertiaryLight: "#2c786c",
      },
    },
    screens: {
      lg: { max: "1280px" }, 
      md: { max: "1024px" }, 
      sm: { max: "768px" }, 
      xs: { max: "480px" },
    },
  },
  plugins: [],
};
