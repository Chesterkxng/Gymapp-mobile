import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "@/components/ui/Icon";

export default function SubscriptionCard({
  packageName,
  gymName,
  price,
  period,
  startDate,
  endDate,
  features = [],
}) {
  return (
    <View style={styles.wrapper}>

      <LinearGradient
        colors={["#615FFF", "#9810FA"]}
        style={styles.card}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{packageName}</Text>
          <Text style={styles.subtitle}>{gymName}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.period}>Par{" "} {period}</Text>
        </View>


        <View style={styles.infoBox}>
          <View style={styles.row}>
            <Icon name="calendar" size={20} color="#FFFFFF" />
            <View style={styles.textBlock}>
              <Text style={styles.label}>Début</Text>
              <Text style={styles.value}>{startDate}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Icon name="calendar" size={18} color="#FFFFFF" />
            <View style={styles.textBlock}>
              <Text style={styles.label}>Fin</Text>
              <Text style={styles.value}>{endDate}</Text>
            </View>
          </View>
        </View>
      </LinearGradient>


      {features.length > 0 && (
        <View style={styles.details}>
          <Text style={styles.detailsTitle}>
            {"Détails de l'abonnement"}
          </Text>

          {features.map((item, index) => (
            <View key={index} style={styles.detailRow}>
              <View style={styles.check}>
                <Icon name="check" size={16} color="#00A63E" />
              </View>
              <Text style={styles.detailText}>{item}</Text>
            </View>
          ))}
        </View>
      )}

    </View>


  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 24
  },

  card: {
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },

  titleContainer: {
    marginBottom: 8
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  subtitle: {
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
    marginTop: 4,
  },

  priceContainer: {
    alignItems: "flex-end",
    marginBottom: 8
  },

  price: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  period: {
    fontSize: 12,
    color: "rgba(255,255,255,0.8)",
  },

  infoBox: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 16,
    padding: 16,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  textBlock: {
    marginLeft: 12,
  },

  label: {
    fontSize: 12,
    color: "#E0E7FF",
  },

  value: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  details: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },

  detailsTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#101828",
    marginBottom: 16,
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  check: {
    width: 24,
    height: 24,
    borderRadius: 14,
    backgroundColor: "#DCFCE7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  detailText: {
    fontSize: 16,
    color: "#364153",
    flex: 1,
  },

});
