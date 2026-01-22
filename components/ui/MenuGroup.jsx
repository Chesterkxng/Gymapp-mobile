import { View, Text, StyleSheet } from 'react-native'
import MenuItem from './MenuItem'
import React from 'react'

const MenuGroup = ({
    label,
    menuItems = []
}) => {
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.groupLabel}>{label}</Text>}

      <View style={styles.card}>
        {menuItems.map((item) => (
          <MenuItem
            key={item.label}
            {...item}
          />
        ))}
      </View>
    </View>
  );
}

export default MenuGroup;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 24,
  },

  groupLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6A7282",
    marginBottom: 12,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
});
