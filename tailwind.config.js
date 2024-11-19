/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        primary: 'hsl(234, 29%, 20%)',
        error: 'hsl(4, 100%, 67%)',
        backgroundColor: 'hsl(235, 18%, 26%)',
        charcoalGray: 'hsl(235, 18%, 26%)',
        gray: 'hsl(231, 7%, 60%)',
        placeholderError: '#FFE8E6',
        btnHover: '#FF6D60',
      },
      fontSize: {
        para:{
          DEFAULT: '16px'
        }
      },
      fontFamily:{
        primary: [ "Roboto", 'sans-serif']
      },
      screens:{
        xs: '200px',
      }
  },
  plugins: [],
}
}