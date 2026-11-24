import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#030712", // obsidian deep dark
          secondary: "#0B0F19", // dark navy
          tertiary: "#111827", // elevated dark
          card: "rgba(15, 23, 42, 0.75)",
          cardHover: "rgba(30, 41, 59, 0.85)",
        },
        accent: {
          blue: "#3B82F6",
          blueDark: "#2563EB",
          cyan: "#06B6D4",
          teal: "#14B8A6",
          emerald: "#10B981",
          purple: "#8B5CF6",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(59, 130, 246, 0.4)",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulseGlow 6s ease-in-out infinite alternate",
        "float-slow": "floatSlow 8s ease-in-out infinite alternate",
      },
      keyframes: {
        pulseGlow: {
          "0%": { opacity: "0.35", transform: "scale(0.96)" },
          "100%": { opacity: "0.75", transform: "scale(1.04)" },
        },
        floatSlow: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        glow: "0 0 35px rgba(59, 130, 246, 0.3)",
        cyanGlow: "0 0 35px rgba(6, 182, 212, 0.3)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
