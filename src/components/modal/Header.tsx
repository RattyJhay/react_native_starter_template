// components/modal/Header.tsx
import React from "react";
import { View, Text, Pressable } from "react-native";
import { X } from "lucide-react-native";
import * as Haptics from "expo-haptics";
import { useAppTheme } from "~/context/ThemeContext";
import { createThemedStyleSheet } from "~/utils/styleSheet";

interface HeaderProps {
  title: string;
  subtitle: string;
  onClose: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, onClose }) => {
  const { theme } = useAppTheme();
  const styles = createHeaderStyles(theme);

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.closeButton,
          pressed && styles.closeButtonPressed,
        ]}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          onClose();
        }}
      >
        <View style={styles.closeButtonContent}>
          <X size={20} color={theme.foreground} strokeWidth={2} />
        </View>
      </Pressable>
    </View>
  );
};

const createHeaderStyles = createThemedStyleSheet((theme) => ({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 24,
    paddingTop: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    color: theme.foreground,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 17,
    color: theme.mutedForeground,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: theme.border,
    marginLeft: 16,
  },
  closeButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },
  closeButtonContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
}));
