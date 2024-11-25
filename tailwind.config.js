/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.js", "./app/**/*.{js,jsx,ts,tsx}"], // Projenizdeki tüm bileşenleri kapsayacak yollar
    presets: [require("nativewind/preset")],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  