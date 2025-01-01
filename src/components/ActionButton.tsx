// components/ActionButton.tsx
import { Pressable, Text } from "react-native";
import * as Haptics from "expo-haptics";
import { createThemedStyleSheet } from "~/utils/styleSheet";
import { useAppTheme } from "~/context/ThemeContext";
import { ElementType } from "react";

export interface ActionButtonProps {
  label: string;
  color: string;
  icon: ElementType;
}

export function ActionButton({ label, color, icon: Icon }: ActionButtonProps) {
  const { theme } = useAppTheme();
  const styles = createActionButtonStyles(theme);

  return (
    <Pressable
      style={[styles.button, { backgroundColor: color + "15" }]}
      onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
    >
      <Icon size={20} color={color} strokeWidth={2} />
      <Text style={[styles.label, { color }]}>{label}</Text>
    </Pressable>
  );
}

const createActionButtonStyles = createThemedStyleSheet((theme) => ({
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    gap: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
  },
}));
