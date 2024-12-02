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

      sm: { max: "1000px" },

      xs: { max: "670px" },

      xxs: { max: "440px" },

      // th: { raw: "(max-width: 350px)  " }, iphone13

      // se: { raw: "(max-width: 380px) and (min-width: 350px)" }, iphoneSE

      // gal: { raw: "(width: 360px) and (height: 740px)"}, galaxy

      // nest: { raw: "(width: 1024px) and (height: 600px)" }, 

      // final: {raw: "(width: 1024px) and (height: 600px)"}
      se: { max: "575px" }, // Mobile (iPhone 3 - iPhone XS Max).
      th: { min: "576px", max: "897px" }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      nest: { min: "898px", max: "1199px" }, // Tablet (matches max: iPad Pro @ 1112px).
    },
  },
  plugins: [],
};
