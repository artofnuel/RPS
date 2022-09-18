/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      },
    extend: {
      backgroundImage: {
        'twinkle': "url('../images/nnneon.svg')"
      },
      fontFamily: {
        "lilita": 'Lilita One, cursive',
      },
      colors: {
        // primary
        bkg: '#0f0e17',
        card: '#fffffe',
        button: '#7f5af0',
      }
    },
  },
  plugins: [],
}
