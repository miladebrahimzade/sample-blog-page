/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    fontFamily: {
      sans: ['Vazirmatn', 'Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      borderRadius: {
        '4xl': '2.5rem',
      },
      colors: {
        primary: '#86BC42',
        secondary: '#849D6A',
      },
    },
  },
  rtl: true,
  plugins: [],
}
