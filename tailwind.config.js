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
        afgreen: '#72c032',
        afgreen2: '#608541',
        afdarkgreen: '#085339',
        afyellow: '#ffde00',
        wtdtteal: '#2ca89e',
        aftext: '#222222',
      },
    },
  },
  plugins: [],
}

