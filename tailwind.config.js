/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'headerColor' : '#00000080',
      'headerFocus': '#FFC20B',
      'white': '#ffffff',
      'black': '#000000',
      'lightGray': '#FAFAFAED',
      'orange': 'linear-gradient(180deg, #FFB224 0%, #FFA636 100%)'
    },
    borderRadius: {
      DEFAULT: '10px',
    },
    extend: {
      fontFamily: {
        'custom': ["Prompt", "Sriracha"],
      },
      fontSize: {
        'header': '20px'
      },
    },
  },
  plugins: [],
};
