import type { Config } from "tailwindcss";

/**
 * tayyibatfood · v1.1 design token contract
 * See: Tayyibatfood_Design_Amendment_v1_1.docx §02
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // ── Cream / paper ──────────────────────────────
        cream: {
          DEFAULT: "#FAF6EC",
          warm: "#F3EBD8",
          deep: "#EADFC3"
        },
        // ── Ink ────────────────────────────────────────
        ink: {
          DEFAULT: "#1A1612",
          soft: "#3D362E",
          muted: "#6B5F52"
        },
        // ── Sage · health · halal ─────────────────────
        sage: {
          mist: "#E2ECD6",
          soft: "#B8C99C",
          DEFAULT: "#6F8655",
          deep: "#47593A",
          ink: "#2D3A23"
        },
        // ── Saffron · rightfulness · gold-leaf ────────
        gold: {
          mist: "#F5E4BC",
          leaf: "#D4A84A",
          DEFAULT: "#C69749",
          deep: "#9B6F24",
          ink: "#5A3F0D"
        },
        // ── Verdicts (semantic only — NEVER chrome) ───
        verdict: {
          allowed: "#6F8655",
          forbidden: "#8B2332",
          "forbidden-deep": "#6B1925",
          caution: "#9B6F24"
        }
      },
      fontFamily: {
        display: ['"Markazi Text"', "serif"],
        body: ["Rubik", "system-ui", "sans-serif"],
        editorial: ['"Amiri"', "serif"],
        latin: ['"Source Serif 4"', "Georgia", "serif"]
      },
      spacing: {
        1: "4px", 2: "8px", 3: "12px", 4: "16px",
        6: "24px", 8: "32px", 12: "48px", 16: "64px",
        24: "96px", 32: "128px"
      },
      borderRadius: {
        sm: "4px", md: "8px", lg: "16px", xl: "28px",
        full: "999px"
      },
      boxShadow: {
        // Warm shadows — sage + gold tinted, NOT cool gray
        sm: "0 1px 2px rgba(84, 62, 30, 0.04)",
        md: "0 4px 12px rgba(71, 89, 58, 0.08), 0 1px 3px rgba(84, 62, 30, 0.04)",
        lg: "0 12px 32px rgba(71, 89, 58, 0.12), 0 2px 6px rgba(84, 62, 30, 0.04)",
        glass: "0 20px 50px rgba(71, 89, 58, 0.14), 0 6px 18px rgba(155, 111, 36, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.95)"
      },
      backdropBlur: {
        glass: "32px"
      }
    }
  },
  plugins: []
};

export default config;
