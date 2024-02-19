/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "rgb(255, 250, 199)"
      },
      boxShadow: {
        glow: "0 0 10px 1px rgb(255, 255, 195)",
      },
    },
  },
  plugins: [],
};
