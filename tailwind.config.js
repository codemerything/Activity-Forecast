/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'inter': ['Inter', 'sans-serif']
      },
      colors:{
        wtdtgreen: '#72c032',
        wtdtgreen2: '#608541',
        darkgreen: '#386018'
      },
    },
  },
  plugins: [],
}

