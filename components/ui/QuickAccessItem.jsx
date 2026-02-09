import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "@/components/ui/Icon";

export default function QuickAccesItem({
  title,
  subtitle,
  gradiantColors = ["#615FFF", "#9810FA"],
  icon,
  onPress,
}) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      
      <LinearGradient
        colors={gradiantColors}
        style={styles.iconContainer}
      >
        <Icon name={icon} size={24} color="#FFFFFF" />
      </LinearGradient>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  card: {
    flexBasis: "45%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#101828",
    marginBottom: 4,
    textAlign: "center"
  },

  subtitle: {
    fontSize: 14,
    color: "#6A7282",
  },
});

