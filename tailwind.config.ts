import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0A",
        charcoal: "#141414",
        graphite: "#1F1F1F",
        gold: {
          DEFAULT: "#D4AF37",
          bright: "#E8B923",
          soft: "#F6E6A8"
        },
        platinum: "#F7F4EC",
        steel: "#A7ADB7",
        signal: "#49C7B8"
      },
      boxShadow: {
        gold: "0 24px 80px rgba(212, 175, 55, 0.16)",
        panel: "0 24px 70px rgba(0, 0, 0, 0.42)"
      },
      backgroundImage: {
        "gold-line": "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.72), transparent)",
        "panel-sheen": "linear-gradient(145deg, rgba(212, 175, 55, 0.12), rgba(255,255,255,0.02) 42%, rgba(73,199,184,0.06))"
      },
      borderRadius: {
        xl: "0.5rem",
        "2xl": "0.5rem",
        "3xl": "0.5rem"
      }
    }
  },
  plugins: []
};

export default config;
