import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],  

  theme: {  
    backgroundImage:{
        bgNitoo1: 'url("/bgImage/bg1.jpg")',
        // bgNitoo2:'url("/cover/coverPage.png")'
      },
    extend: {

    },      

  },    

  plugins: [],
};
export default config;
