/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mood B — "Rivered Paper"
        bone: {
          DEFAULT: "#EAE6DD",
          50: "#F5F2EC",
          100: "#EFEBE2",
          200: "#EAE6DD",
          300: "#DDD7CB",
          400: "#C9C2B3",
        },
        ink: {
          DEFAULT: "#1F2230",
          soft: "#2A2E3D",
          muted: "#4A4F60",
          faint: "#7A7F8E",
        },
        river: {
          DEFAULT: "#3A4A6B",
          deep: "#2C3A57",
          soft: "#5A6A87",
          wash: "#8FA0BC",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-instrument)", "system-ui", "sans-serif"],
        deva: ["var(--font-tiro)", "serif"],
      },
      fontSize: {
        // restrained scale — only 6 sizes total
        "micro": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.08em" }],
        "small": ["0.9375rem", { lineHeight: "1.6" }],
        "body": ["1.0625rem", { lineHeight: "1.75" }],
        "lead": ["1.25rem", { lineHeight: "1.7" }],
        "display": ["clamp(2.25rem, 5vw, 3.75rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "hero": ["clamp(2.75rem, 7vw, 5.25rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
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
