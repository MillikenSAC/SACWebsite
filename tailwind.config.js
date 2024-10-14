/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
    
  ],
  theme: {
    
    extend: {},
    fontFamily: { 
      'Atkinson Hyperlegible': ['Atkinson Hyperlegible']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

