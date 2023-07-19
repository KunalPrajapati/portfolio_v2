/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '2xl': ['2rem', {
          lineHeight: '2.5rem',
          letterSpacing: '2px',
          fontWeight: '500',
        }],
        '3xl': ['3rem', {
          lineHeight: '3.25rem',
          letterSpacing: '2px',
          fontWeight: '700',
        }],
    },},
  },
  plugins: [],
}