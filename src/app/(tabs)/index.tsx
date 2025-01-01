import { ScrollView, Text, View } from "react-native";
import {
  Zap,
  Sparkles,
  Shapes,
  MessagesSquare,
  Timer,
  Lightbulb,
} from "lucide-react-native";
import { Header } from "~/components/Header";
import { StatCard } from "~/components/StatCard";
import { ActionButton } from "~/components/ActionButton";
import { InfoCard } from "~/components/InfoCard";
import { useAppTheme } from "~/context/ThemeContext";
import { createThemedStyleSheet } from "~/utils/styleSheet";

export default function TabOneScreen() {
  const { theme } = useAppTheme();
  const styles = createScreenStyles(theme);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.statsGrid}>
          <StatCard
            title="Activity"
            value="85%"
            icon={Zap}
            accentColor="#FF6B6B"
          />
          <StatCard
            title="Progress"
            value="12/15"
            icon={Sparkles}
            accentColor="#4ECDC4"
          />
          <StatCard
            title="Projects"
            value="8"
            icon={Shapes}
            accentColor="#45B1E8"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionGrid}>
            <ActionButton
              label="Messages"
              icon={MessagesSquare}
              color="#FF9F43"
            />
            <ActionButton label="Timer" icon={Timer} color="#6C5CE7" />
            <ActionButton label="Ideas" icon={Lightbulb} color="#26DE81" />
          </View>
        </View>

        <View style={styles.section}>
          <InfoCard
            title="Did you know?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </View>
      </ScrollView>
    </View>
  );
}

const createScreenStyles = createThemedStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  content: {
    padding: 24,
  },
  statsGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 32,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: theme.foreground,
    marginBottom: 16,
  },
  actionGrid: {
    flexDirection: "row",
    gap: 12,
  },
}));
