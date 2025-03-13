/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"], 
  theme: {
    extend: {
      colors: {
        primary: "#FF9A8B",  // Coral (Main theme)
        secondary: "#A7C4BC", // Pastel Green
        background: "#F3F8FF", // Soft Blue Background
      }
    },
  },
  plugins: [],
}
