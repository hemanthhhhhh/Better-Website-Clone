/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        container: 'rgb(0, 71, 51)',
        backgroundInverseSecondary: 'rgb(1 120 72)',
        accentBorderSecondary: '#017848',
        interactivePrimary: 'rgb(1 120 72)',
      },
      boxShadow: {
        accentBorderSecondary: '0px 4px 6px rgba(1, 120, 72, 1)'
      },
    },
  },
  plugins: [],
};
