import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Tabs({
  tabs,
  value,
  onChange,
}) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const active = value === tab.key;

        return (
          <Pressable
            key={tab.key}
            style={[
              styles.tab,
              active && styles.activeTab,
            ]}
            onPress={() => onChange(tab.key)}
          >
            <Text
              style={[
                styles.label,
                active && styles.activeLabel,
              ]}
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#F3F4F6",
    borderRadius: 14,
    padding: 4,
    marginBottom: 32,
  },

  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  activeTab: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#667085",
  },

  activeLabel: {
    color: "#101828",
    fontWeight: "500",
  },
});
