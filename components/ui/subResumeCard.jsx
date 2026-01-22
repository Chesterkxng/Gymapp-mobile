import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SubscriptionResumeCard({
  packageName,
  gymName,
  endDate,
  onPress,
}) {
  return (
    <LinearGradient
      colors={["#615FFF", "#9810FA"]}
      style={styles.card}
    >
      <View style={styles.content}>
       
        <View style={styles.left}>
          <Text style={styles.title}>{packageName}</Text>

          <Text style={styles.description}>
            {gymName}
          </Text>

          <Text style={styles.label}>Prochaine expiration</Text>
          <Text style={styles.date}>{endDate}</Text>
        </View>

        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Details</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  left: {
    flex: 1,
    paddingRight: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 6,
  },

  description: {
    fontSize: 14,
    color: "rgba(255,255,255,0.85)",
    marginBottom: 16,
  },

  label: {
    fontSize: 12,
    color: "#E0E7FF",
    marginBottom: 4,
  },

  date: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  button: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 14,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
});
