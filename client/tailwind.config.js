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
        tertiaryLight: "#2c786c"
      },
    },
    screens: {
      lg: { max: "2023px" },

      sm: { max: "1000px" },

      xs: { max: "670px" },

      xxs: { max: "440px" },

      th: { raw: "(max-width: 350px)  " },

      se: { raw: "(max-width: 380px) and (min-width: 350px)" },

      gal: { raw: "(width: 360px) and (height: 740px)"},

      nest: { raw: "(width: 1024px) and (height: 600px)" },
    },
  },
  plugins: [],
};
