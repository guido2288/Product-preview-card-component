/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    screens: {
      sm: '480px',
      md: '481px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        DarkCyanHover: 'hsl(158, 36%, 37%)',
        DarkCyan: 'hsl(130, 57%, 61%)',
        Cream: 'hsl(30, 38%, 92%)',
        VeryDarkBlue: 'hsl(212, 21%, 14%)',
        DarkGrayishBlue: 'hsl(228, 12%, 48%)',
        White: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        Montserrat: ['Montserrat'],
        Fraunces: ['Fraunces'],
      }
    },
  },
  plugins: [],
}
