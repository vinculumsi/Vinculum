/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        black: "#000000",
        white: "#ffffff",
        yellow: {
          20: "#FFC400",
        },
        orange: {
          20: "#FF5D0D",
        },
      },
      fontFamily: {
        atkinson: ["Atkinson", "sans-serif"],
      },
    },
  },
  plugins: [],
};
