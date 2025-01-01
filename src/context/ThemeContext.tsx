// contexts/ThemeContext.tsx
import React, { createContext, useContext } from "react";
import { ColorScheme } from "~/constants/colors";
import { useTheme } from "~/hooks/useTheme";

type ThemeContextType = {
  theme: ColorScheme;
  toggleTheme: () => void;
  isDark: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeContext = useTheme();

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useAppTheme must be used within a ThemeProvider");
  }
  return context;
}
