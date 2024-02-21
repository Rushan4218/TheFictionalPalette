/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#FEFAE0",
        darkgreen: "#283618",
        green: "#606C38",
        brown: "#BC6C25",
        lightbrown: "#DDA15E"
      },
      boxShadow: {
        glow: "0 0 10px 1px rgb(255, 255, 195)",
      },
      backgroundImage: {
        hrpattern: "url(./src/assets/bgpatternhr.png)"
      }
    },
  },
  plugins: [],
};
