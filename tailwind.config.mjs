/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        show: {
          "0%": { opacity: "0", transform: "scale(25%)" },
          "100%": { opacity: "1", transform: "scale(100%)" },
        },
      },
      animation: {
        show: "show 1s ease-in-out",
      },
      transitionProperty: {
        "opacity-transform": "opacity, transform",
      },
      translate: {
        20: "20px",
      },
      opacity: {
        0: "0",
        100: "1",
      },
      colors: {
        transparent: "transparent",
        black: "#000000",
        white: "#ffffff",
        gray: "#f0f0f0",
        yellow: {
          20: "#FFC400",
        },
        orange: {
          20: "#FF5D0D",
        },
      },
      fontFamily: {
        kantumruy: ["Kantumruy", "sans-serif"],
      },
      boxShadow: {
        custom: "0 2px 8px rgba(var(--black), 0.05)",
      },
    },
  },
  plugins: [],
};
