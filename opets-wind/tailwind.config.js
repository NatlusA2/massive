/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'abu':'#333437',
        'opet':'#FF9900',
        'lemon':'#FEFA9C'
      },
      fontFamily: {
        nunito:['Nunito'],
        poppin:['Poppins']
      },
      height: {
        'tinggi': '200px',
      },
      fontSize:{
        ads:['40px']
      }
    },
  },
  plugins: [],
}

