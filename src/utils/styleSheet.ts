// utils/styleSheet.ts
import { StyleSheet } from "react-native";
import { ColorScheme } from "~/constants/colors";

type StyleFactory<T> = (theme: ColorScheme) => T;

export function createThemedStyleSheet<T extends StyleSheet.NamedStyles<T>>(
  styleFactory: StyleFactory<T>
) {
  return (theme: ColorScheme) => StyleSheet.create(styleFactory(theme));
}
