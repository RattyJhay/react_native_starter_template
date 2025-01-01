import { Text } from "react-native";
import { View } from "react-native";
import { useAppTheme } from "~/context/ThemeContext";
import { createThemedStyleSheet } from "~/utils/styleSheet";

export interface InfoCardProps {
  title: string;
  text: string;
}

export function InfoCard({ title, text }: InfoCardProps) {
  const { theme } = useAppTheme();
  const styles = createInfoCardStyles(theme);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const createInfoCardStyles = createThemedStyleSheet((theme) => ({
  card: {
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.border,
    overflow: "hidden",
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: theme.foreground,
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    color: theme.mutedForeground,
    lineHeight: 22,
  },
}));
