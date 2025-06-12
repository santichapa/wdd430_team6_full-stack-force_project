/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bright: "#FF6F61",
        dark: "#333333",
        light: "#F8F8F8",
        mango1: "#F8EDEB",
        mango2: "#FEC89A",
        mango3: "#F1CEBE",
        mango4: "#F49595",
        mango5: "#FCD5CE",
      },
      fontFamily: {
        fredericka: ["'Fredericka the Great'", "cursive"],
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      maxWidth: {
        '2xl': '1400px', // Use '2xl' instead of 'screen-2xl' for Tailwind v3
      },
    },
  },
  plugins: [],
};