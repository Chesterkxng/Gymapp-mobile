import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "@/components/ui/Icon";

export default function MenuItem({
  icon,
  label,
  onPress,
  chevron = true, 
  style
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.item,
        pressed && { backgroundColor: "#F9FAFB" },
        style
      ]}
    >
      <View style={styles.left}>
        <View style={styles.iconWrapper}>
          <Icon name={icon} size={18} color="#667085" />
        </View>

        <Text style={styles.label}>{label}</Text>
      </View>

      {chevron && (
        <Icon name="rightChevron" size={20} color="#364153" />
      )}

    </Pressable>
  );
}


const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#101828",
  }
});
