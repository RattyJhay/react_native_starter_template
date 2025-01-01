// components/modal/LinkButton.tsx

import { Text, Pressable } from "react-native";
import * as Haptics from "expo-haptics";
import { useAppTheme } from "~/context/ThemeContext";
import { createThemedStyleSheet } from "~/utils/styleSheet";
import { ExternalLink } from "lucide-react-native";

interface LinkButtonProps {
  icon: React.ElementType;
  label: string;
  onPress: () => void;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  icon: Icon,
  label,
  onPress,
}) => {
  const { theme } = useAppTheme();
  const styles = createLinkButtonStyles(theme);

  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress();
      }}
    >
      <Icon size={20} color={theme.foreground} strokeWidth={2} />
      <Text style={styles.text}>{label}</Text>
      <ExternalLink size={16} color={theme.mutedForeground} strokeWidth={2} />
    </Pressable>
  );
};

const createLinkButtonStyles = createThemedStyleSheet((theme) => ({
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: theme.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.border,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  text: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    fontWeight: "500",
    color: theme.foreground,
  },
}));
