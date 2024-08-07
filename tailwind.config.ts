import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'desktop': "url('/assets/images/bg-sidebar-desktop.svg')",
        'mobile': "url('/assets/images/bg-sidebar-mobile.svg')",
      },
      colors:{
        "Marineblue": "hsl(213, 96%, 18%)",
        "Purplishblue": "hsl(243, 100%, 62%)",
        "Pastelblue":" hsl(228, 100%, 84%)",
        "Lightblue": "hsl(206, 94%, 87%)",
        "Strawberryred": "hsl(354, 84%, 57%)",
        "Coolgray": "hsl(231, 11%, 63%)",
        "Lightgray": "hsl(229, 24%, 87%)",
        "Magnolia": "hsl(217, 100%, 97%)",
        "Alabaster": "hsl(231, 100%, 99%)",
        "White": "hsl(0, 0%, 100%)",
        
      },
    },
  },
  plugins: [],
};
export default config;
