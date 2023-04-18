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
        darkgreen: '#085339',
        wtdtyellow: '#ffde00',
        wtdtteal: '#2ca89e'
      },
    },
  },
  plugins: [],
}

