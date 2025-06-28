import animationPlugin from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,html,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["var(--font-open-sans)"],
        "dm-sans": ["var(--font-dm-sans)"],
        playfair: ["var(--font-playfair-display)"],
      },
      fontSize: {
        "10px": "0.6875rem",
        "11px": "0.625rem",
        "13px": "0.8125rem",
      },
      colors: {
        button: {
          primary: "hsl(var(--button-primary))",
          "primary-foreground": "hsl(var(--button-primary-foreground))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          accent: "hsl(var(--foreground-accent))",
          primary: "hsl(var(--foreground-primary))",
          "primary-emphasis": "hsl(var(--foreground-primary-emphasis))",
          secondary: "hsl(var(--foreground-secondary))",
          muted: "hsl(var(--foreground-muted))",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
          accent: "hsl(var(--background-accent))",
          secondary: "hsl(var(--background-secondary))",
          muted: "hsl(var(--background-muted))",
        },
        "carousel-dot": {
          DEFAULT: "hsl(var(--carousel-dot))",
          hover: "hsl(var(--carousel-dot-hover))",
          active: "hsl(var(--carousel-dot-active))",
        },
      },
      borderColor: {
        border: "hsl(var(--border))",
        "border-secondary": "hsl(var(--border-secondary))",
        "border-payment-card": "hsl(var(--border-payment-card))",
      },
      lineHeight: {
        "160%": "160%",
        "180%": "180%",
        "100%": "100%",
        "30px": "30px",
      },
      letterSpacing: {
        "3%": "3%",
        "8%": "8%",
        "1%": "1%",
        "10%": "10%",
        "0%": "0%",
        "50px": "50px",
      },
    },
  },
  plugins: [animationPlugin],
}
