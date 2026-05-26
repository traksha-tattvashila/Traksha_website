import type { Config } from "tailwindcss";
import { colors } from "./src/tokens/colors";
import { fontFamily, fontSize, letterSpacing, maxWidth } from "./src/tokens/typography";
import { EASE_GENTLE_CSS } from "./src/tokens/motion";
import { container } from "./src/tokens/spacing";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/tokens/**/*.ts",
  ],
  theme: {
    extend: {
      colors,
      fontFamily: fontFamily as Record<string, string[]>,
      fontSize: fontSize as Record<string, [string, Record<string, string>]>,
      letterSpacing,
      maxWidth: {
        ...maxWidth,
        site: container.maxWidth,
      },
      transitionDuration: {
        DEFAULT: "600ms",
        slow: "1200ms",
      },
      transitionTimingFunction: {
        gentle: EASE_GENTLE_CSS,
      },
    },
  },
  plugins: [],
};

export default config;
