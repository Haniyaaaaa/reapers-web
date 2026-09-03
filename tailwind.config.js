/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: "#10181B",
          900: "#18262A",
          800: "#23363A",
        },
        accent: {
          teal: "#7EE0C1",
          coral: "#FF846B",
        },
      },
      fontFamily: {
        display: ['"Chakra Petch"', "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      backgroundImage: {
        blade:
          "linear-gradient(135deg, #7EE0C1 0%, #FFD166 100%)",
      },
    },
  },
  plugins: [],
};
