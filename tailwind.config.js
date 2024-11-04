/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        openSans: ["var(--font-open-sans)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        primary: "#003366",
        heading: "#161C2D",
        heading_Blue_BG: "#E0E0E0",
        subheading: "#4D4D4D",
        subheading_Blue_BG: "#B3B3B3",
        paragraph: "#2F2F2F",
        Paragraph_Primary_BG: "#DDDDDD",
        border: "#CCCCCC",
        Border_Primary_BG: "#333333",
        Nav_Link_Primary_BG: "##FF9B3F",
        textSecond: "#5c616c",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 16s linear infinite",
      },
      screens: {
        'md_desktop': '1200px',
        'sm_desktop': '1100px',
        'xsm_desktop': '1060px',
        'md_phone': '530px',
        'phone': "470px",
        'sm_phone': '380px',
      },
    },

  },
  plugins: [],
};
