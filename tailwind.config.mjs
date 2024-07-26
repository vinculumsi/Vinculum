/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
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
