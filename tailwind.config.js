/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {


      animation: {
        marquee: "marquee 25s linear infinite",
        animationtrain: "marquee 25s linear infinite reverse", // Add "reverse" here
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        animationtrain: {
          "0%": { transform: "translateX(50%)" }, // Start from 100%
          "100%": { transform: "translateX(-100%)" }, // End at 0%
        },
      },
    },
  },
  plugins: [],
}
