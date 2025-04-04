/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        warnaLogin : "#E4F5FF"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        londrina : ['Londrina Shadow', "sans-serif"]
      },
    },
  },
  plugins: [],
}

