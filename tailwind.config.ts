import type { Config } from "tailwindcss";
import { BASE_URL } from "./constants";

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
        "rol-banner": `url('${BASE_URL}/images/rol-banner.png')`,
        "line-icon": `url('${BASE_URL}/images/icons/line.svg')`,
        "line-last-icon": `url('${BASE_URL}/images/icons/line-last.svg')`,
        slotted: `url('${BASE_URL}/images/icons/slotted_bg.png')`,
        empty: `url('${BASE_URL}/images/icons/empty_bg.png')`,
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
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
