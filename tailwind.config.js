/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        PastelRed: 'hsl(0, 100%, 67%)', 
      },
      fontFamily: {
        sans: ['Clash Display', 'sans-serif'],
      },
      height: {
        98: '28rem',
        100: '31rem',
        101: '42rem', 
      },
      width: {
        30: '30rem',
        100: '73rem',
      },
      padding: {
        22: '86px',
      }
    },
  },
  plugins: [],
}

 