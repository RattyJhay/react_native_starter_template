# React Native Theme Starter 🎨

A React Native starter template with a robust theming system based on shadcn's design tokens. Features automatic dark mode support and type-safe theme definitions.

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm expo start
```

## 🎨 Theming System

This template implements a powerful theming system that supports both light and dark modes. Here's how it works:

### 📁 Project Structure

```
src/
├── constants/
│   └── colors.ts      # Theme definitions
├── contexts/
│   └── ThemeContext.tsx   # Theme context provider
├── hooks/
│   └── useTheme.ts    # Theme hook
├── utils/
│   └── styleSheet.ts  # Themed StyleSheet creator
└── app/
    └── _layout.tsx    # Root layout with ThemeProvider
```

### 🎯 Implementation Guide

1. First, define your color scheme in `constants/colors.ts`:

```typescript
// constants/colors.ts
type ColorValue = string;

interface ColorScheme {
  background: ColorValue;
  foreground: ColorValue;
  // ... other color definitions
}

const lightTheme: ColorScheme = {
  background: "#FFFFFF",
  foreground: "#020817",
  // ... other light theme colors
};

const darkTheme: ColorScheme = {
  background: "#020817",
  foreground: "#F8FAFC",
  // ... other dark theme colors
};

export type { ColorScheme };
export { lightTheme, darkTheme };
```

2. Create the Theme Context (`contexts/ThemeContext.tsx`):

```typescript
// contexts/ThemeContext.tsx
import React, { createContext, useContext } from "react";
import { useTheme } from "~/hooks/useTheme";
import { ColorScheme } from "~/constants/colors";

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
  if (!context)
    throw new Error("useAppTheme must be used within ThemeProvider");
  return context;
}
```

3. Implement the theme hook (`hooks/useTheme.ts`):

```typescript
// hooks/useTheme.ts
import { useState, useEffect } from "react";
import { Appearance } from "react-native";
import { lightTheme, darkTheme, ColorScheme } from "~/constants/colors";

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
```

4. Create a themed StyleSheet utility (`utils/styleSheet.ts`):

```typescript
// utils/styleSheet.ts
import { StyleSheet } from "react-native";
import { ColorScheme } from "~/constants/colors";

type StyleFactory<T> = (theme: ColorScheme) => T;

export function createThemedStyleSheet<T extends StyleSheet.NamedStyles<T>>(
  styleFactory: StyleFactory<T>
) {
  return (theme: ColorScheme) => StyleSheet.create(styleFactory(theme));
}
```

5. Set up the root layout (`app/_layout.tsx`):

```typescript
// app/_layout.tsx
import { Stack } from "expo-router";
import { ThemeProvider } from "~/contexts/ThemeContext";
import { useAppTheme } from "~/contexts/ThemeContext";

function RootLayoutNav() {
  const { theme } = useAppTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTintColor: theme.foreground,
        headerTitleStyle: {
          color: theme.foreground,
        },
      }}
    />
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootLayoutNav />
    </ThemeProvider>
  );
}
```

### 🎯 Usage in Components

Here's how to use the theming system in your components:

```typescript
// components/MyComponent.tsx
import { View, Text } from "react-native";
import { createThemedStyleSheet } from "~/utils/styleSheet";
import { useAppTheme } from "~/contexts/ThemeContext";

const createStyles = createThemedStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.background,
    padding: 20,
  },
  text: {
    color: theme.foreground,
    fontSize: 16,
  },
}));

export function MyComponent() {
  const { theme, toggleTheme } = useAppTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Themed Component</Text>
    </View>
  );
}
```

## 🔄 Converting Tailwind/shadcn Colors

The color tokens from shadcn have been converted from HSL values to hex codes. Original shadcn CSS variables:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;
  }
}
```

These HSL values have been converted to hex codes in our theme definition for use in React Native.

## 📱 Features

- 🌓 Automatic dark mode support
- 🎨 Type-safe theme definitions
- 📦 Reusable styled components
- 🔄 System theme synchronization
- 🛠 Easy to customize and extend

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
