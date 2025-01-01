type ColorValue = string;
interface ColorScheme {
  background: ColorValue;
  foreground: ColorValue;
  card: ColorValue;
  cardForeground: ColorValue;
  popover: ColorValue;
  popoverForeground: ColorValue;
  primary: ColorValue;
  primaryForeground: ColorValue;
  secondary: ColorValue;
  secondaryForeground: ColorValue;
  muted: ColorValue;
  mutedForeground: ColorValue;
  accent: ColorValue;
  accentForeground: ColorValue;
  destructive: ColorValue;
  destructiveForeground: ColorValue;
  border: ColorValue;
  input: ColorValue;
  ring: ColorValue;
  radius: string;
  chart: {
    c1: ColorValue;
    c2: ColorValue;
    c3: ColorValue;
    c4: ColorValue;
    c5: ColorValue;
  };
}

const lightTheme: ColorScheme = {
  background: "#FFFFFF",
  foreground: "#09090B",
  card: "#FFFFFF",
  cardForeground: "#09090B",
  popover: "#FFFFFF",
  popoverForeground: "#09090B",
  primary: "#18181B",
  primaryForeground: "#FAFAFA",
  secondary: "#F4F4F5",
  secondaryForeground: "#18181B",
  muted: "#F4F4F5",
  mutedForeground: "#71717A",
  accent: "#F4F4F5",
  accentForeground: "#18181B",
  destructive: "#EF4444",
  destructiveForeground: "#FAFAFA",
  border: "#E4E4E7",
  input: "#E4E4E7",
  ring: "#18181B",
  radius: "0.5rem",
  chart: {
    c1: "#FF6B6B",
    c2: "#4ECDC4",
    c3: "#2C3E50",
    c4: "#F7D794",
    c5: "#FF7E67",
  },
};

const darkTheme: ColorScheme = {
  background: "#09090B",
  foreground: "#FAFAFA",
  card: "#09090B",
  cardForeground: "#FAFAFA",
  popover: "#09090B",
  popoverForeground: "#FAFAFA",
  primary: "#FAFAFA",
  primaryForeground: "#18181B",
  secondary: "#27272A",
  secondaryForeground: "#FAFAFA",
  muted: "#27272A",
  mutedForeground: "#A1A1AA",
  accent: "#27272A",
  accentForeground: "#FAFAFA",
  destructive: "#7F1D1D",
  destructiveForeground: "#FAFAFA",
  border: "#27272A",
  input: "#27272A",
  ring: "#D4D4D8",
  radius: "0.5rem",
  chart: {
    c1: "#4D7FE3",
    c2: "#45B1A8",
    c3: "#FF9F43",
    c4: "#9B5DE5",
    c5: "#F15F79",
  },
};

export type { ColorScheme };
export { lightTheme, darkTheme };
