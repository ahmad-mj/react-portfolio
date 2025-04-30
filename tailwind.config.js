/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5e3bee",
        primary_bg: "#ece9f1",
        mainColor: "#393e46",
        sideColor: "#eeeeee",
        lightColor: "#00adb5",
        darkblue: "#3a4750",
        github: "#e94e77",
        white: "#ffffff",
        black: "#000000",
      },
      fontFamily: {
        base: ["Arial", "sans-serif"]
      }
    },
  },
  plugins: [],
}
