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
      lg: { max: "2023px" },

      se: { max: "1000px" }, // old sm

      th: { max: "670px" }, // old xs

      xxs: { max: "440px" },

      xs: { raw: "(max-width: 350px) and (orientation: portrait)" }, // old th

      sm: { raw: "(max-width: 380px) and (min-width: 350px) and (orientation: portrait)" }, // old se

      md: { raw: "(width: 360px) and (height: 740px) and (orientation: portrait)"}, // old gal

      nest: { raw: "(width: 1024px) and (height: 600px) and (orientation: portrait)" }, 

      final: {raw: "(width: 1024px) and (height: 600px) and (orientation: portrait)"}
    },
  },
  plugins: [],
};
