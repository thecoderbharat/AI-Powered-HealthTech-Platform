import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Palette — "Clinical Oracle"
        primary: "#83efe1",
        "primary-dim": "#74e1d3",
        "primary-container": "#3fb1a5",
        "primary-fixed": "#83efe1",
        "primary-fixed-dim": "#74e1d3",
        "on-primary": "#005951",
        "on-primary-container": "#002824",
        "on-primary-fixed": "#00443e",
        "on-primary-fixed-variant": "#00635b",
        "inverse-primary": "#006b62",

        secondary: "#af88ff",
        "secondary-dim": "#8a4cfc",
        "secondary-fixed": "#dcc9ff",
        "secondary-fixed-dim": "#d0b8ff",
        "on-secondary": "#2b0065",
        "on-secondary-fixed": "#430097",
        "on-secondary-fixed-variant": "#6514d6",
        "secondary-container": "#6001d1",
        "on-secondary-container": "#e1d0ff",

        tertiary: "#f2f3ff",
        "tertiary-container": "#dfe4fe",
        "tertiary-fixed": "#dfe4fe",
        "tertiary-fixed-dim": "#d1d6ef",
        "tertiary-dim": "#d1d6ef",
        "on-tertiary": "#555b70",
        "on-tertiary-container": "#4d5367",
        "on-tertiary-fixed": "#3b4054",
        "on-tertiary-fixed-variant": "#575d72",

        // Neutral Surface Scale
        background: "#070d1f",
        surface: "#070d1f",
        "surface-dim": "#070d1f",
        "surface-bright": "#222b47",
        "surface-variant": "#1c253e",
        "surface-container-lowest": "#000000",
        "surface-container-low": "#0c1326",
        "surface-container": "#11192e",
        "surface-container-high": "#171f36",
        "surface-container-highest": "#1c253e",
        "surface-tint": "#83efe1",
        "on-surface": "#dfe4fe",
        "on-surface-variant": "#a5aac2",
        "inverse-surface": "#faf8ff",
        "inverse-on-surface": "#4f5469",

        // Utility
        outline: "#6f758b",
        "outline-variant": "#41475b",

        // Error
        error: "#ff716c",
        "error-dim": "#d7383b",
        "error-container": "#9f0519",
        "on-error": "#490006",
        "on-error-container": "#ffa8a3",
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #83efe1 0%, #3fb1a5 100%)",
        "gradient-hero":
          "radial-gradient(circle at 20% 30%, rgba(175, 136, 255, 0.08) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(131, 239, 225, 0.05) 0%, transparent 40%)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      boxShadow: {
        "glow-teal": "0 0 40px -10px rgba(131, 239, 225, 0.25)",
        "glow-purple": "0 0 40px -10px rgba(175, 136, 255, 0.25)",
        "glow-teal-lg": "0 10px 40px -5px rgba(131, 239, 225, 0.3)",
        "ambient-dark": "0 24px 48px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
