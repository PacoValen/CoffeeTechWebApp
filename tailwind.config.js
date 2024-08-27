/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "#B31D34", // Puedes darle un nombre como 'customRed'
        customSoftRed: "#E8A3AB",
      },
    },
  },
  plugins: [],
};
