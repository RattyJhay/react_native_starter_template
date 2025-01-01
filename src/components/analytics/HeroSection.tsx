// components/analytics/HeroSection.tsx

import { View, Text } from "react-native";
import { Activity } from "lucide-react-native";
import { useAppTheme } from "~/context/ThemeContext";
import { createThemedStyleSheet } from "~/utils/styleSheet";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
}) => {
  const { theme } = useAppTheme();
  const styles = createHeroStyles(theme);

  return (
    <View style={styles.hero}>
      <View style={styles.heroContent}>
        <View style={styles.heroText}>
          <Text style={styles.heroTitle}>{title}</Text>
          <Text style={styles.heroSubtitle}>{subtitle}</Text>
        </View>
        <Activity size={32} color={theme.foreground} strokeWidth={1.5} />
      </View>
    </View>
  );
};

const createHeroStyles = createThemedStyleSheet((theme) => ({
  hero: {
    padding: 24,
    paddingTop: 60,
  },
  heroContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: theme.border,
    overflow: "hidden",
  },
  heroText: {
    gap: 4,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: theme.foreground,
  },
  heroSubtitle: {
    fontSize: 15,
    color: theme.mutedForeground,
  },
}));
