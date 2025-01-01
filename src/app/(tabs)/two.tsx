import React from "react";
import { ScrollView, Text, View } from "react-native";
import { BarChart3, Album, Calendar } from "lucide-react-native";
import { HeroSection } from "~/components/analytics/HeroSection";
import { MetricCard } from "~/components/analytics/MetricCard";
import { CategoryItem } from "~/components/analytics/CategoryItem";
import { ActivityCard } from "~/components/analytics/ActivityCard";
import { useAppTheme } from "~/context/ThemeContext";
import { createThemedStyleSheet } from "~/utils/styleSheet";

export default function TabTwoScreen() {
  const { theme } = useAppTheme();
  const styles = createScreenStyles(theme);

  const activities = [
    { text: "Activity item 1", time: "2h ago" },
    { text: "Activity item 2", time: "2h ago" },
    { text: "Activity item 3", time: "2h ago" },
  ];

  const handleViewAll = () => {
    // Handle view all press
  };

  return (
    <ScrollView style={styles.container}>
      <HeroSection title="Analytics" subtitle="Track your progress" />

      <View style={styles.metricsContainer}>
        <MetricCard
          label="Total Views"
          value="24.5k"
          trend="+12.3%"
          color="#4CAF50"
        />
        <MetricCard
          label="Engagement"
          value="68%"
          trend="+5.2%"
          color="#2196F3"
        />
        <MetricCard
          label="Conversion"
          value="3.8%"
          trend="+2.1%"
          color="#9C27B0"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoriesList}>
          <CategoryItem
            icon={BarChart3}
            label="Analytics"
            count={12}
            color="#FF6B6B"
          />
          <CategoryItem icon={Album} label="Media" count={8} color="#4ECDC4" />
          <CategoryItem
            icon={Calendar}
            label="Schedule"
            count={15}
            color="#45B1E8"
          />
        </View>
      </View>

      <View style={styles.section}>
        <ActivityCard activities={activities} onViewAll={handleViewAll} />
      </View>
    </ScrollView>
  );
}

const createScreenStyles = createThemedStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  metricsContainer: {
    padding: 24,
    paddingTop: 0,
    gap: 12,
  },
  section: {
    padding: 24,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: theme.foreground,
    marginBottom: 16,
  },
  categoriesList: {
    gap: 12,
  },
}));
