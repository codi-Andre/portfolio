/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    container: {
      center: true,
      padding: "0.5rem"
    },
    extend: {
      colors: {
        design: {
          text: "var(--text)",
          bg: "var(--background)",
          secondary: "var(--secondary)"
        }
      }
    }
  },
  plugins: []
}
