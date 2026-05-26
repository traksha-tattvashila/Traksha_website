export const colors = {
  bone: {
    DEFAULT: "#ECE7DC",
    light:   "#F3EEE5",
    deep:    "#E2DCCD",
  },
  ink: {
    DEFAULT: "#001F20",
    soft:    "#0D2A2C",
    muted:   "#3A4F51",
    faint:   "#6E7E80",
  },
  river: {
    DEFAULT: "#2A5158",
    deep:    "#1D3E44",
    soft:    "#4A6C72",
    wash:    "#8AA3A8",
  },
} as const;

export const cssVariables = {
  "--bone":       colors.bone.DEFAULT,
  "--bone-light": colors.bone.light,
  "--ink":        colors.ink.DEFAULT,
  "--ink-soft":   colors.ink.soft,
  "--ink-muted":  colors.ink.muted,
  "--ink-faint":  colors.ink.faint,
  "--river":      colors.river.DEFAULT,
  "--river-soft": colors.river.soft,
} as const;
