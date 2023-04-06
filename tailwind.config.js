/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'inter': ['Inter', 'sans-serif']
      },
      colors:{
        wtdtgreen: '#72c032',
        wtdtgreen2: '#608541'
      },
    },
  },
  plugins: [],
}

