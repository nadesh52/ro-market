import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { noto: ["Noto Sans Thai"], josefin: ["Josefin Sans"] },
      backgroundPosition: {
        "custom-pos": "100% 10%",
        "line-pos": "50% center",
      },
      backgroundImage: {
        "line-icon": "url('/images/icons/line.svg')",
        "line-last-icon": "url('/images/icons/line-last.svg')",
        slotted: "url('/images/icons/slotted_bg.png')",
        empty: "url('/images/icons/empty_bg.png')",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      perspective: {
        "1000": "1000px",
        "500": "500px",
        "250": "250px",
      },
    },
    fontSize: {
      xs: ["10px", "14px"],
      sm: ["12px", "16px"],
      md: ["14px", "20px"],
      lg: ["16px", "24px"],
      xl: ["18px", "28px"],
      "2xl": ["20px", "28px"],
      "3xl": ["24px", "32px"],
      "4xl": ["30px", "36px"],
      "5xl": ["36px", "42px"],
    },
    screens: {
      "2xs": "320px",
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    function ({ addUtilities }: any) {
      addUtilities({
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
      });
    },
    function ({ addUtilities }: any) {
      addUtilities({
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".perspective-500": {
          perspective: "500px",
        },
        ".perspective-250": {
          perspective: "250px",
        },
      });
    },
    function ({ addUtilities }: any) {
      addUtilities({
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".rotate-y-neg-180": {
          transform: "rotateY(-180deg)",
        },
        // Add more custom rotateY utilities as needed
      });
    },
  ],
};
export default config;
