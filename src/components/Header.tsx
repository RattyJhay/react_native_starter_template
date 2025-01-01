import { Link } from "expo-router";
import { Info } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { useAppTheme } from "~/context/ThemeContext";
import { createThemedStyleSheet } from "~/utils/styleSheet";
import * as Haptics from "expo-haptics";

export function Header() {
  const { theme } = useAppTheme();
  const styles = createHeaderStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Here's your daily overview</Text>
      </View>

      <Link href="/modal" asChild>
        <Pressable
          style={({ pressed }) => [
            styles.infoButton,
            pressed && styles.infoButtonPressed,
          ]}
          onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
        >
          <View style={styles.infoButtonContent}>
            <Info size={20} color={theme.foreground} strokeWidth={2} />
          </View>
        </Pressable>
      </Link>
    </View>
  );
}

const createHeaderStyles = createThemedStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 24,
    paddingTop: 60,
  },
  textContainer: {
    flex: 1,
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
  infoButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: theme.border,
    marginLeft: 16,
  },
  infoButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },
  infoButtonContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
}));
