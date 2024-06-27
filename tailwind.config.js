/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'righteous': ['Righteous',],
      'work-sans': ['Work Sans', 'sans-serif'],
    },
    extend: {
      screens: {
        '2xl': '1536px',
        // Si necesitas modificar el punto de quiebre de 1200px
        'lg': '1200px',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}