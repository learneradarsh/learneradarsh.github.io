/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        fg: "#111827",
        muted: "#6B7280",
        subtle: "#9CA3AF",
      },
    },
  },
  plugins: [],
};
