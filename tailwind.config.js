/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", './public/*.html'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
daisyui: {
  themes: [ {
    light: { ...require("daisyui/src/theming/themes")["dim"], primary: "76ABAE", secondary: "FC6736",}, }, "nord", ], }, }

