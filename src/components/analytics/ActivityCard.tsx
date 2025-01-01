// components/analytics/ActivityCard.tsx
import { Pressable, Text, View } from "react-native";
import { useAppTheme } from "~/context/ThemeContext";
import * as Haptics from "expo-haptics";
import { createThemedStyleSheet } from "~/utils/styleSheet";
interface ActivityItemProps {
  text: string;
  time: string;
}

interface ActivityCardProps {
  activities: ActivityItemProps[];
  onViewAll: () => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  activities,
  onViewAll,
}) => {
  const { theme } = useAppTheme();
  const styles = createActivityStyles(theme);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Recent Activity</Text>
        <Pressable
          style={styles.viewAllButton}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            onViewAll();
          }}
        >
          <Text style={styles.viewAllText}>View All</Text>
        </Pressable>
      </View>
      <View style={styles.list}>
        {activities.map((activity, index) => (
          <View key={index} style={styles.item}>
            <View style={styles.dot} />
            <Text style={styles.text}>{activity.text}</Text>
            <Text style={styles.time}>{activity.time}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const createActivityStyles = createThemedStyleSheet((theme) => ({
  card: {
    backgroundColor: theme.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.border,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: theme.foreground,
  },
  viewAllButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: theme.muted,
  },
  viewAllText: {
    fontSize: 13,
    fontWeight: "500",
    color: theme.mutedForeground,
  },
  list: {
    gap: 12,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.primary,
  },
  text: {
    flex: 1,
    fontSize: 15,
    color: theme.foreground,
  },
  time: {
    fontSize: 13,
    color: theme.mutedForeground,
  },
}));
