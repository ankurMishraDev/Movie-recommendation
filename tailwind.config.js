/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  presets: [ require("nativewind/preset") ],
  theme: {
    extend: {
      colors:{
          primary: "#030014",
        secondary: "#151312",
        light: {
          100: "#D6C6EF",
          200: "#ABB5DB",
          300: "#9CA5AB",
          400: "#9CA3AF",
          500: "#6B7280",
        },
        dark:{
          100: "#221f3d",
          200: "#0f0d23",
          300: "#111827",
          400: "#0F172A",
          500: "#0B1120",
        }
      }
    },
  },
  plugins: [],
}

