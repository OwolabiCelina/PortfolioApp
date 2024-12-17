/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/src/assets/background-img2.jpg')",
      },
      fontFamily: {
        assistant: ['Assistant', 'sans-serif'], 
        lexend: ['Lexend', 'sans-serif'],       
        manrope: ['Manrope', 'sans-serif'],     
        ysabeau: ['Ysabeau', 'sans-serif'],  
        ysabeauInfant: ['Ysabeau Infant', 'serif'],
      },
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
};
