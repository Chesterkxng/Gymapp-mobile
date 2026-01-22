// components/auth/AuthHeader.jsx
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Icon from "@/components/ui/Icon";

export default function NavBack({ style }) {
  const router = useRouter();

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => router.back()}
        activeOpacity={0.7}
      >
        <Icon name="leftArrow" size={20} color="#4A5565" />
        <Text style={styles.backText}>Retour</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    color: "#4A5565",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 8,
  }
});
