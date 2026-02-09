import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

import AppView from '@/components/layout/AppView'
import NavBack from '@/components/layout/NavBack'
import Icon from "@/components/ui/Icon";
import AppButton from "@/components/forms/AppButton";

import { NOTIFICATION_CONFIG } from "@/app/notification/notification.config";

import { formatRelativeTime } from "@/utils/datetime";

import { notifications } from '@/data/notifications'


export default function NotificationDetail() {
    const { notificationID } = useLocalSearchParams();

    const notification = notifications.find((item) => item.id === notificationID);

    const config = NOTIFICATION_CONFIG[notification.type] || NOTIFICATION_CONFIG.reminder;

    return (
        <AppView>
            <NavBack />

            <View style={styles.card}>
                <View style={{ alignItems: "center" }}>
                    <View style={[styles.iconContainer, {
                        backgroundColor: config.backgroundColor,
                    }]}>
                        <Icon name={config.icon} size={60} color={config.iconColor} />
                    </View>

                </View>

                <Text style={styles.title}>{notification.title}</Text>
                {notification.gymName && (
                    <Text style={styles.subtitle}>{notification.gymName}</Text>
                )}
                <Text style={styles.message}>{notification.message}</Text>
                <Text style={styles.time}>{formatRelativeTime(notification.createdAt)}</Text>
            </View>

            <AppButton 
                title={"Marquer comme lue"}
                icon={"doubleCheck"}
            />
        </AppView>
    );
}

const styles = StyleSheet.create({
    card: {

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
        width: 100,
        height: 100,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },

    content: {
        flex: 1,
    },

    title: {
        fontSize: 18,
        fontWeight: "700",
        color: "#101828",
        marginBottom: 10,
        textAlign: "center"
    },

    subtitle: {
        fontSize: 16,
        fontWeight: "500",
        color: "#6A7282",
        marginBottom: 10,
    },

    message: {
        fontSize: 16,
        color: "#475467",
        marginBottom: 10,
    },

    time: {
        fontSize: 12,
        color: "#6A7282",
        fontWeight: 400,
        textAlign: "right"
    },
})

