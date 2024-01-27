import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#0D062D",
        "light-brd": "#DADDDD",
        "sec-text": "#787486",
        "light-pink": "#898989",
        "dark-blue": "#3A3F51",
        "trend-pill": "rgba(52, 202, 165, 0.12)",
        "bluish-grey": "#606060",
        "alert-error": "#ED544E",
        "neutral-500": "#737373",
        "status-paid": "#34CAA5",
      },
    },
  },
  plugins: [],
  important: true,
};
export default config;
