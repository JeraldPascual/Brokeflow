/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
      },
      colors: {
        teal: {
          DEFAULT: '#00A19C',
          dark:    '#007A76',
          deeper:  '#005855',
          petronas:'#00D2BE',
          lt:      '#AFFFFB',
        },
        surface: '#F4FFFE',
        border: {
          DEFAULT: '#C8EDEB',
          med:     '#99DCDA',
        },
      },
    },
  },
  plugins: [],
}
