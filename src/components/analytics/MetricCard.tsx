import { Pressable, Text } from "react-native";
import { useAppTheme } from "~/context/ThemeContext";
import { createThemedStyleSheet } from "~/utils/styleSheet";
import * as Haptics from "expo-haptics";

// components/analytics/MetricCard.tsx
interface MetricCardProps {
  label: string;
  value: string;
  trend: string;
  color: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  trend,
  color,
}) => {
  const { theme } = useAppTheme();
  const styles = createMetricStyles(theme);

  return (
    <Pressable
      style={[styles.card, { borderLeftColor: color }]}
      onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
    >
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.trend, { color }]}>{trend}</Text>
    </Pressable>
  );
};

const createMetricStyles = createThemedStyleSheet((theme) => ({
  card: {
    backgroundColor: theme.card,
    padding: 20,
    borderRadius: 16,
    borderLeftWidth: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: theme.border,
  },
  value: {
    fontSize: 20,
    fontWeight: "600",
    color: theme.foreground,
    flex: 1,
  },
  label: {
    fontSize: 15,
    color: theme.mutedForeground,
    flex: 1,
  },
  trend: {
    fontSize: 15,
    fontWeight: "600",
  },
}));
