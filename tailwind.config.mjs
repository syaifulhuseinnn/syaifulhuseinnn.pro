/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      screens: {
        xs: "390px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
