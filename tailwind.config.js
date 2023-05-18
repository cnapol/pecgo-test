/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
    },
    colors: {
      headerColor: "#00000080",
      headerFocus: "#FFC20B",
      white: "#ffffff",
      black: "#000000",
      lightGray: "#FAFAFAED",
      orangeLeft: "#FFB224",
      orange: "#FFA636",
      insurePaw: "#EC965B",
      petFriend: "#42C9C4",
      muangThai: "#0096D6",
      falcon: "#00284A",
      gray: "#606060",
    },
    borderRadius: {
      DEFAULT: "10px",
      full: "50%",
      m: "30px",
      button: "35px",
    },
    extend: {
      colors: {
        lineGray: "#D9D9D9",
        darkGray: "#4B4B4B",
        gray1: "#999999",
        gray2: "#898989",
        red: "#FF5863",
        brown: "#5E4848",
        searchGray: "#F1F1F1",
        menuGray: "#F2F2F2",
        insuranceName: "#8A8A8A",
        green: "#E7F6E9",
        blue: "#E7F2F6",
        detail: "#313131",
        searchMobile: "#F7F7F7",
      },
      fontFamily: {
        custom: ["Prompt"],
        sriracha: ["Sriracha"],
        oxanium: ["Oxanium"],
      },
      fontSize: {
        header: "20px",
      },
      boxShadow: {
        "3xl": "15px 13px 34px 0px rgba(0, 0, 0, 0.1)",
        top: "0px -1px 9px -2px rgba(0, 0, 0, 0.25)",
        button: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        plan: "8px 9px 26px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
