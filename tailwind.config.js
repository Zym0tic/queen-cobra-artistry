/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: '#F2C8CF',
        accent: '#C46581',
        accent2: '#834A54',
        accent3: '#D38241',
      },
    },
  },
  plugins: [],
}