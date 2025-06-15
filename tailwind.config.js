/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        sucess: "var(--color-sucess)",
        text15: "var(--color-text-15)",
        tertiaryWhite: "var(--color-tertiary-white)",
        tertiaryGreen: "var(--color-tertiary-green)",
        tertiaryBlack: "var(--color-tertiary-black)",
        tertiaryNeutral: "var(--color-tertiary-neutral)",
        tertiarySubdueText: "var(--color-tertiary-subdue-text)",
        buttonPurple: "var(--color-button-purple)",
        buttonBlue: "var(--color-button-blue)",
        lightBlue: "var(--color-light-blue)",
        tertiaryFooter: "var(--color-tertiary-footer)",
        white: "var(--color-tertiary-white)",
        black: "var(--color-tertiary-black)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #EFF6FF, #FFFFFF, #F5F3FF)",
        "button-gradient": "linear-gradient(to right, #743EED, #2D5FEB)",
      },
      boxShadow: {
        custom: "0px 0px 10px 0px rgba(87, 18, 68, 0.15)",
        select: "0px 2px 0px 0px #E7EBEE33 inset",
        search: "0px 20px 25px 0px #0000001A",
        faq: "0px 1px 3px 1px rgb(0, 0, 0, 0.3)",
      },
      dropShadow: {
        custom: "0px 25px 50px 0px #00000040",
        custom2: "0px 1px 2px 0px #0000000D",
      },
      screens: {
        xs: "500px",
        xmd: "850px",
        xxs: "400px",
      },
    },
  },
  plugins: [],
};

// box-shadow: 0px 20px 25px 0px #0000001A;

// box-shadow: 0px 8px 10px 0px #0000001A;
