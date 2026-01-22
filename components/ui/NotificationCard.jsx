import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "@/components/ui/Icon";

export default function NotificationCard({
  title,
  gymName,
  message,
  type,
  time,
  unread = false,
  onPress,
}) {

  const NOTIFICATION_CONFIG = {
    reminder: {
      icon: "calendar",
      iconColor: "#4F39F6",
      backgroundColor: "#E0E7FF"
    }, 
    birthday: {
      icon: "birthdate",
      iconColor: "#155DFC",
      backgroundColor: "#DBEAFE",
    }
  }

  const config = NOTIFICATION_CONFIG[type] || NOTIFICATION_CONFIG.reminder;


  return (
    <Pressable style={styles.card} onPress={onPress}>

      <View style={[styles.iconContainer, {
        backgroundColor: config.backgroundColor,
      }]}>
        <Icon name={config.icon} size={18} color={config.iconColor} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {gymName && (
          <Text style={styles.subtitle}>{gymName}</Text>
        )}
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>

      {/* Unread dot */}
      {unread && <View style={styles.dot} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: 'flex-start',
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 22,
    marginBottom: 12,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#101828",
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6A7282",
    marginBottom: 4,
  },

  message: {
    fontSize: 14,
    color: "#475467",
    marginBottom: 6,
  },

  time: {
    fontSize: 12,
    color: "#6A7282",
    fontWeight: 400,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4F39F6",
  },
});
