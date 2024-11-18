/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadowDown: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        down: "0px 1.349px 1.349px 0px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Philosopher: ["Philosopher", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Pacifico: ['Pacifico', "cursive"],
      },
      lineHeight: {
        custom: '24px',
      },
      keyframes: {
        slide: {
          "100%": {
            transform: "translateX(calc(-50% - 2rem))",
          },
        },
        slideRight: {
          "100%": {
            transform: "translateX(calc(50% + 2rem))",
          },
        },
        mobileSlide: {
          "100%": {
            transform: "translateX(calc(-50% - 0.5rem))",
          },
        },
        slideArrow: {
          "100%": {
            transform: "translateX(calc(-50% - 2.3rem))",
          },
        },

      },
      animation: {
        autoScrollInfinite: "slide 20s infinite linear",
        autoScrollInfiniteRight: "slideRight 20s infinite linear",
        autoScrollInfinite10: "slide 10s infinite linear",
        autoScrollInfinite15: "slide 15s infinite linear",
        autoScrollInfinite20: "slide 20s infinite linear",
        autoScrollInfiniteMobile10: "mobileSlide 10s infinite linear",
        autoScrollInfiniteMobile15: "mobileSlide 15s infinite linear",
        autoScrollInfiniteMobile20: "mobileSlide 20s infinite linear",
        scrollLeft: "slide 5s linear",
        animateArrowInfinte: " slideArrow 20s infinite linear",
      },
    },
  },
  variants: {},
  plugins: [],
};
