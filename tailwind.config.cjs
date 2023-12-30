/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./*.html",
    "./js/main.js"
  ],
  theme: {
    extend: {
      colors: {
        twitch: {
          'dark-purple': '#201c2b', // Dark Mode Background
          'purple': '#6441A4',      // Accent Color / Links
          'dark-grey': '#232127',   // Light Mode Text
          'light-grey': '#e5e3e8',  // Dark Mode Text / Text Overlays
          'light-purple': '#e2dbf0' // Links in Dark Mode
        }
      }
    },
  },
  plugins: [],
}
