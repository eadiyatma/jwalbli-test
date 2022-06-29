/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8362F2",
        "text-button": "#730C07",
        "text-primary": "#696969",
        secondary: "#525252",
        stars: "#FFC107",
        background: 'rgba(245, 245, 245, 0.75)',
      },
    },
  },
  plugins: [],
  mode: 'jit',
}
