/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mood B — "Rivered Paper" (rebalanced for clarity)
        bone: {
          DEFAULT: "#ECE7DC",
          light: "#F2EDE3",
          deep: "#E2DCCD",
        },
        ink: {
          DEFAULT: "#15171F",
          soft: "#1F2230",
          muted: "#3C414F",
          faint: "#6B7080",
        },
        river: {
          DEFAULT: "#324669",
          deep: "#243352",
          soft: "#4D5E80",
          wash: "#8FA0BC",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-instrument)", "system-ui", "sans-serif"],
        deva: ["var(--font-tiro)", "serif"],
      },
      fontSize: {
        // restrained scale — six sizes only
        "micro": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.08em" }],
        "small": ["0.9375rem", { lineHeight: "1.55" }],
        "body": ["1.0625rem", { lineHeight: "1.65" }],
        "lead": ["1.1875rem", { lineHeight: "1.55" }],
        "display": ["clamp(1.875rem, 3.6vw, 2.625rem)", { lineHeight: "1.18", letterSpacing: "-0.012em" }],
        "hero": ["clamp(2.25rem, 5.2vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.018em" }],
      },
      letterSpacing: {
        wider: "0.08em",
        widest: "0.18em",
      },
      maxWidth: {
        "reading": "38rem",
        "prose-wide": "44rem",
      },
      transitionDuration: {
        DEFAULT: "600ms",
        slow: "1200ms",
      },
      transitionTimingFunction: {
        gentle: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
