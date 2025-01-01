import { ArrowRight } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { useAppTheme } from "~/context/ThemeContext";
import * as Haptics from "expo-haptics";
import { createThemedStyleSheet } from "~/utils/styleSheet";

// components/analytics/CategoryItem.tsx
interface CategoryItemProps {
  icon: React.ElementType;
  label: string;
  count: number;
  color: string;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  icon: Icon,
  label,
  count,
  color,
}) => {
  const { theme } = useAppTheme();
  const styles = createCategoryStyles(theme);

  return (
    <Pressable
      style={styles.item}
      onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
    >
      <View style={[styles.icon, { backgroundColor: color + "15" }]}>
        <Icon size={20} color={color} strokeWidth={2} />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.count}>{count} items</Text>
      </View>
      <ArrowRight size={20} color={theme.mutedForeground} strokeWidth={2} />
    </Pressable>
  );
};

const createCategoryStyles = createThemedStyleSheet((theme) => ({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: theme.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.border,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  label: {
    fontSize: 17,
    fontWeight: "600",
    color: theme.foreground,
    marginBottom: 4,
  },
  count: {
    fontSize: 13,
    color: theme.mutedForeground,
  },
}));
