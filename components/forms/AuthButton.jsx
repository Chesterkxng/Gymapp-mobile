import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function AuthButton({ title, onPress, disabled, style }) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        disabled && styles.disabled,
        style
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    width: "100%",

    backgroundColor: "#FFFFFF",
    borderRadius: 14,

    justifyContent: "center",
    alignItems: "center",

    // soft shadow (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,

    //  elevation (Android)
    elevation: 8,

    marginTop: 12,
  },

  text: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4F39F6", 
    letterSpacing: 0.31,
  },

  disabled: {
    opacity: 0.6,
  },
});
