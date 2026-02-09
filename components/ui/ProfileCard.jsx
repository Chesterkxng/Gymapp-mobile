import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "@/components/ui/Icon";

export default function ProfileCard({
  name,
  memberId,
  gender,
}) {
  return (
    <LinearGradient
      colors={["#615FFF", "#9810FA"]}
      style={styles.card}
    >
      <View style={styles.avatar}>
        <Icon name={gender ? "male": "female"} size={28} color="#6D4AFF" />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.id}>ID: {memberId}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    height: "128",
    marginBottom: 30,

    // shadow iOS
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },

    // shadow Android
    elevation: 8,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  textContainer: {
    flex: 1,
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 4,
  },

  id: {
    fontSize: 14,
    color: "#E0E7FF",
    fontWeight: "400",
  },
});
