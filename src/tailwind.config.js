/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        // "slide-in-right": "slideInRight 1s ease-out",
      },
    },

    fontFamily: {
      body: ["Lato", "sans-serif"], // Default for paragraphs
      title: ["Montserrat", "sans-serif"], // Default for headings
    },
  },
  plugins: [],
};
