/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundColor: {
        'light': '#fffbec',
        'amber-light': '#fef3c7',
        'blue-gray': '#0f172a',
        'amber': '#78350f',
        'amber-400': '#FBBF24'
      },
      textColor: {
        'amber': '#78350f',
        'amber-light': '#fef3c7'
      },
      borderColor: {
        amber: '#78350f'
      },
    },
  },
  plugins: [],
}

