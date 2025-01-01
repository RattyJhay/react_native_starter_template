// screens/ModalScreen.tsx
import React from "react";
import { View, Text, ScrollView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { Sparkles, Github, Twitter, Mail } from "lucide-react-native";
import { Header } from "~/components/modal/Header";
import { InfoCard } from "~/components/modal/InfoCard";
import { LinkButton } from "~/components/modal/LinkButton";
import { useAppTheme } from "~/context/ThemeContext";
import { createThemedStyleSheet } from "~/utils/styleSheet";

export default function ModalScreen() {
  const { theme } = useAppTheme();
  const styles = createModalStyles(theme);

  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />

      <Header
        title="About"
        subtitle="Learn more about the app"
        onClose={() => router.back()}
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <InfoCard
            icon={Sparkles}
            title="Beautiful Design"
            description="Clean and minimal interface with attention to detail and smooth animations"
          />
          <InfoCard
            icon={Sparkles}
            title="Dark Mode"
            description="Automatically adjusts to your system theme or manually toggle dark mode"
          />
          <InfoCard
            icon={Sparkles}
            title="Customizable"
            description="Easily customize the app to match your preferences and needs"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Connect</Text>
          <View style={styles.linksList}>
            <LinkButton
              icon={Github}
              label="View on GitHub"
              onPress={() => {}}
            />
            <LinkButton
              icon={Twitter}
              label="Follow on Twitter"
              onPress={() => {}}
            />
            <LinkButton icon={Mail} label="Send Feedback" onPress={() => {}} />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.version}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const createModalStyles = createThemedStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 24,
    paddingTop: 0,
    gap: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: theme.foreground,
    marginBottom: 16,
  },
  linksList: {
    gap: 12,
  },
  footer: {
    padding: 24,
    alignItems: "center",
  },
  version: {
    fontSize: 13,
    color: theme.mutedForeground,
  },
}));
