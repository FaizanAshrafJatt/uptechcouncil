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
        // Neutrals
        neutral: {
          900: "var(--neutral-900)",
          800: "var(--neutral-800)",
          700: "var(--neutral-700)",
        },
        // Brand
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          foreground: "var(--primary-foreground)",
        },
        // Accents
        accent: {
          "uk-red": "var(--accent-uk-red)",
          "pakistan-green": "var(--accent-pakistan-green)",
          teal: "var(--accent-teal)",
        },
        // Light mode
        light: {
          bg: "var(--bg-light)",
          surface: "var(--surface-light)",
          "surface-2": "var(--surface-light-2)",
          text: "var(--text-on-light)",
          muted: "var(--muted-on-light)",
          border: "var(--border-light)",
        },
        // Dark mode
        dark: {
          bg: "var(--neutral-900)",
          "bg-2": "var(--neutral-800)",
          surface: "var(--surface-dark)",
          "surface-2": "var(--surface-dark-2)",
          text: "var(--text-on-dark)",
          muted: "var(--muted-on-dark)",
          "muted-subtle": "var(--muted-on-dark-subtle)",
          border: "var(--border-dark)",
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
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        card: "var(--radius-lg)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        "glow-primary": "var(--shadow-glow-primary)",
        "glow-teal": "var(--shadow-glow-teal)",
      },
      spacing: {
        section: "5rem",
        "section-lg": "7rem",
      },
    },
  },
  plugins: [],
};
export default config;