import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Direct brand colors that will override default
        primary: {
          DEFAULT: "#1E40AF",
          hover: "#1E3A8A",
          foreground: "#FFFFFF",
        },
        accent: {
          "uk-red": "#E11D48",
          "pakistan-green": "#00B140",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        card: "16px",
      },
      spacing: {
        section: "5rem",
        "section-lg": "7rem",
      },
      boxShadow: {
        "glow-primary": "0 0 24px rgba(30, 64, 175, 0.15)",
        "glow-green": "0 0 24px rgba(0, 177, 64, 0.12)",
        "glow-red": "0 0 24px rgba(225, 29, 72, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;