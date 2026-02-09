import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function App({ children }) {
  return (
    <LinearGradient
      colors={["#F8FAFC", "#FFFFFF"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safe}
        edges={['top', 'left', 'right']}
      >
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
    paddingHorizontal: 24,
    paddingTop: 24
  }
});
