/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#29abe3',
        'primaryDark': '#3829e3',
        'logo': '#edebeb',
        'bg1': '#4c05b0',
      },
      backgroundImage: {

      },
    },
  },
  plugins: [],
}
