import { View, Text, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Icon from "@/components/ui/Icon";

export default function QrCard({
  value,
  memberId,
}) {
  return (
    <View style={styles.card}>
      

      <View style={styles.qrWrapper}>
        <QRCode
          value={value}
          size={217}
          color="#000000"
          backgroundColor="transparent"
        />
      </View>


      <View style={styles.idWrapper}>
        <Icon name="idCard" size={16} color="#6D4AFF" />
        <Text style={styles.idText}>{memberId}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 32,
    alignItems: "center",

    // shadow iOS
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },

    // shadow Android
    elevation: 8,
    marginBottom: 24
  },

  qrWrapper: {
    backgroundColor: "#F3F4FF",
    borderRadius: 16,
    padding: 32,
    marginBottom: 16,
    width: "100%"
  },

  idWrapper: {
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F9FF",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 14,
  },

  idText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
  },
});
