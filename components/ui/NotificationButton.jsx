import { View, Text, StyleSheet, Pressable } from 'react-native'
import Icon from "@/components/ui/Icon";
import { router } from 'expo-router'
import React from 'react'

const NotificationButton = ({
    hasUnread = false,
}) => {
    return (
        <Pressable
            style={styles.button}
            onPress={() => router.push('/notification')}
        >
            <View style={styles.iconWrapper}>
                <Icon
                    name={"notification"}
                    size={24}
                    color={"#364153"}
                />

                {hasUnread && <View style={styles.dot} />}
            </View>
        </Pressable>
    )
}

export default NotificationButton

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        padding: 12,
        height: 48,
        width: 48,

        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 4,

    },

    iconWrapper: {
        position: "relative",
    },

    dot: {
        position: "absolute",
        top: -2,
        right: -2,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#FB2C36",
    },
})