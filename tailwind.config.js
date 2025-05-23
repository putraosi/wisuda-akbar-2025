/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background1: "url('/src/assets/bg.png')",
      },

      colors: {
        // BLACK
        blackBold: "#1A1A1A",
        black100: "#37394A",
        black90: "#4B4D5C",
        black70: "#737480",
        black50: "#9B9CA4",
        black30: "#C3C4C9",
        black10: "#EBEBED",
        black5: "#F5F5F6",
        darkMode:"#252526",

        gold100:"#cda644"
      },

    },
  },
  plugins: [],
};
