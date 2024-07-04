import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    minHeight: {
      full: "calc(100vh - 200px)",
    },
    fontFamily: {
      geist: ["var(--font-geist)"],
      cabinet: ["var(--font-cabinet-grotesk)"],
      retrocomputer: ["var(--font-retro-computer)"],
    },
    text: {
      reversed: '#fff',
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
