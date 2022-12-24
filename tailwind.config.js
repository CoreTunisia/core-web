/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      minWidth: {
        0: '0',
        '1/5': '20%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      minHeight: {
        '82vh': '82vh',
        '90vh': '90vh',
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%',
        5: '5 5 0%',
      },
      colors: {
        'second-400': 'rgba(48,53,114,0.7)',
        second: 'rgb(28,33,94)',
        'second-600': 'rgba(08,13,74)',
        main: 'rgb(233,58,100)',
        'main-600': 'rgb(213,38,80)',
        'main-100': 'rgb(233,58,100, 0.3)',
        primary: '#1d4ed8',

        /*----- dark mode colors ----- */
        'dark-bg-primary': '#111827',
        'dark-bg-secondary': '#1f2937',
        'dark-bg-input': '#374151',
      },
    },
  },
  plugins: [],
}
