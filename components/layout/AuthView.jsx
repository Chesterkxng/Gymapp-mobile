import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function AuthView({ children }) {
  return (
    <LinearGradient
      colors={["#615FFF", "#9810FA"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safe}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  safe: {
    flex: 1,
    padding: 20,
  }
});
