/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#365584",
      accent: "#2168D2",
      regularText: "#828282",
      white: "#ffffff",
      black: "#000000",
      heroBg: "#fffffe",
      menuBg: "#e5e5e5",
    },
    screens: {
      tablet: "430px",
      desktop: "1024px",
      wide: "1366px",
    },
  },
  plugins: [],
};
