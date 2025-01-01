// components/modal/InfoCard.tsx
import React from "react";
import { View, Text } from "react-native";
import { useAppTheme } from "~/context/ThemeContext";
import { createThemedStyleSheet } from "~/utils/styleSheet";

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  const { theme } = useAppTheme();
  const styles = createInfoCardStyles(theme);

  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Icon size={24} color={theme.foreground} strokeWidth={2} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const createInfoCardStyles = createThemedStyleSheet((theme) => ({
  card: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: theme.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.border,
    gap: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.muted,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: theme.foreground,
  },
  description: {
    fontSize: 15,
    color: theme.mutedForeground,
    lineHeight: 22,
  },
}));
