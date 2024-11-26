/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: '#37548a',
        'custom-secondary': '#758ab4',
        'custom-card': '#F4F6F9'
      },
    },
  },
  plugins: [],
};
