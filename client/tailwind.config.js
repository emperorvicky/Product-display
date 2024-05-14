/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'vsm': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',

    },
    backgroundImage:{
      bgNitoo1: 'url("/bgimg/bg1.jpg")',
      bgNitoo2:'url("/cover/coverPage.png")'
    },
    extend: {
      colors:{
        "Gold":"#FFD700"
      }
    },
  },
  plugins: [],
};
