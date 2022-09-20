/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",  
  content: ["./dist/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
