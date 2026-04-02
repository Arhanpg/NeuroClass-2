/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: { 50: "#f0f4ff", 500: "#4f6ef7", 600: "#3b5de7", 900: "#1a2a6c" } },
      fontFamily: { sans: ["Inter", "sans-serif"] },
      animation: { "fade-in": "fadeIn 0.5s ease-out", shimmer: "shimmer 2s infinite" },
      keyframes: { fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } }, shimmer: { "100%": { transform: "translateX(100%)" } } },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
