// hooks/useTheme.ts
import { useState, useEffect } from "react";
import { Appearance } from "react-native";
import { ColorScheme, lightTheme, darkTheme } from "~/constants/colors";

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState<ColorScheme>(() =>
    Appearance.getColorScheme() === "dark" ? darkTheme : lightTheme
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setCurrentTheme(colorScheme === "dark" ? darkTheme : lightTheme);
    });

    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    setCurrentTheme((current) =>
      current === lightTheme ? darkTheme : lightTheme
    );
  };

  return {
    theme: currentTheme,
    toggleTheme,
    isDark: currentTheme === darkTheme,
  };
}
