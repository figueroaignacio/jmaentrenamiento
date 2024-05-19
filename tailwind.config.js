/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundColor: {
        background: "var(--background)",
      },
      colors: {
        foreground: "var(--foreground)",
        primary: "var(--primary)",
      },
      borderColor: {
        border: "var(--border)",
      },
    },
  },
  plugins: [],
};
