import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        hankenItalic: ["var(--font-hanken-italic-variable)"],
        hanken: ["var(--font-hanken-variable)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#F39D33",
        accent: {
          teal: "#54BFB5",
          lime: "#BED95F",
          yellow: "#F2BA52",
          red: "#F24535",
          brown: "#400A05",
        },
        white: "#FFF4E0",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        emerald: "#10b981",
        red: "#F24535",
        beige: "#f5f5dc",
        gray: {
          0: "#ffffff",
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
          1000: "#000000",
        },
      },
      height: {
        dvh: "var(--dynamic-vh)",
        woSettings: "calc(var(--dynamic-vh) - 5rem)",
        woHeader: "calc(var(--dynamic-vh) - 5rem)",
        section: "calc(var(--dynamic-vh) * 0.7)",
      },
      minHeight: {
        dvh: "var(--dynamic-vh)",
      },
    },
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};
export default config;
