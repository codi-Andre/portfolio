/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "0.5rem"
    },
    extend: {
      colors: {
        design: {
          text: "var(--text)",
          bg: "var(--background)"
        }
      }
    }
  },
  plugins: []
}
