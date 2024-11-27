/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: {
          500: "#2ffcd5",
        },
        eden: {
          700: "#306A5F",
          500: "#58877E",
        },
        eclipse: {
          800: "#383838",
          600: "#515151",
        },
        bittersweet: {
          500: "#ff6060",
        },
        salmon: {
          500: "#ff7b7b",
        },
        white: "#f8f8f8",
      },
      keyframes: {
        "dandelion-left": {
          "0%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(5deg)" },
          "100%": { transform: "rotate(-3deg)" },
        },
        "dandelion-right": {
          "0%": { transform: "rotate(29deg)" },
          "50%": { transform: "rotate(33deg)" },
          "100%": { transform: "rotate(29deg)" },
        },
      },
    },
  },
  plugins: [],
};
