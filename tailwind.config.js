/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {colors:{
      'primaryColor': '#396C03',
      'secondaryColor': '#F0F4EC'
    },
    backgroundImage: {
      'bg_image':"url('/src/assets/img/cyclebg.png')",
    },},
  },
  plugins: [require("daisyui")],
}

