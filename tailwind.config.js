/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta': '"Plus Jakarta Sans", sans-serif',
        'poppins': '"Poppins", sans-serif'
      },

      colors: {
        'main-bg-color': '#FAFAFA',
        'main-text-color': '#181818',
        'sec-text-color': '#072125',
        'third-color': '#00FF84',
        'btn-color': '#F44335'
      }
    },
  },
  plugins: [],
}

