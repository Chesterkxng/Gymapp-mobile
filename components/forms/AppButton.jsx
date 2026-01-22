import { Text, StyleSheet, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "@/components/ui/Icon";

export default function AppButton({
  title,
  icon,
  onPress,
  disabled = false,
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.wrapper,
        pressed && !disabled && { opacity: 0.9 },
        disabled && { opacity: 0.5 },
      ]}
    >
      <LinearGradient
       colors={["#615FFF", "#9810FA"]}
        style={styles.button}
      >
        {icon && (
          <View style={styles.icon}>
            <Icon name={icon} size={24} color="#FFFFFF" />
          </View>
        )}

        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    borderRadius: 16,
  },

  button: {
    height: 64,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,

    // shadow iOS
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },

    // shadow Android
    elevation: 6,
  },

  icon: {
    marginRight: 8,
  },

  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
