// components/StatCard.tsx
import React, { ElementType } from "react";
import { View, Text } from "react-native";
import { useAppTheme } from "~/context/ThemeContext";
import { createThemedStyleSheet } from "~/utils/styleSheet";

export interface StatCardProps {
  title: string;
  value: string;
  icon: ElementType;
  accentColor: string;
}

export function StatCard({
  title,
  value,
  icon: Icon,
  accentColor,
}: StatCardProps) {
  const { theme } = useAppTheme();
  const styles = createStatCardStyles(theme);

  return (
    <View style={[styles.card, { borderColor: accentColor + "30" }]}>
      <View
        style={[styles.iconContainer, { backgroundColor: accentColor + "15" }]}
      >
        <Icon size={20} color={accentColor} strokeWidth={2} />
      </View>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const createStatCardStyles = createThemedStyleSheet((theme) => ({
  card: {
    flex: 1,
    backgroundColor: theme.card,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  value: {
    fontSize: 20,
    fontWeight: "600",
    color: theme.foreground,
    marginBottom: 4,
  },
  title: {
    fontSize: 13,
    color: theme.mutedForeground,
  },
}));
