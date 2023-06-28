/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./blogue/**/*.mdx"
  ],
  theme: {
    extend: {
      fontFamily:{
        'satisfy': ['Satisfy'],
        'mulish': ['Mulish']
        },
        colors: {
          "lbf-blanc": "#e4dacd",
          "lbf-rose": "#e2bea8",
          "lbf-orange": "#e6a97e",
          "lbf-rouge": "#cd6547",
          "lbf-bleu": "#9da686"
        },
        backgroundImage: {
          'nuage-orange': "url('nuage-orange.svg')",
        },
        screens: {
          'xxs': '420px',
    
          'xs': '500px',

          'sm': '700px'
  
        },
    },
  },
  plugins: [],
}
