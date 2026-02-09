import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const VisitHistoric = ({
    gymName,
    type,
    date,
    timeIn,
    timeOut
}) => {

    const TYPE_STYLES = {
        subscription: {
            badgeBg: "#DCFCE7",
            textColor: "#008236",
            label: "Abonnement",
        },
        session: {
            badgeBg: "#FFEDD4",
            textColor: "#CA3500",
            label: "Séance",
        },
    };

    const typeConfig = TYPE_STYLES[type] || TYPE_STYLES.subscription;


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flex: 1}}>
                    <Text style={styles.gym}>{gymName}</Text>
                </View>

                <View style={[styles.typeBadge,
                { backgroundColor: typeConfig.badgeBg }
                ]}>
                    <Text style={styles.typeText}>{typeConfig.label}</Text>
                </View>
            </View>

            <View style={styles.header}>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.hour}>{timeIn} {timeOut && (
                    <Text>
                        {"- "} {timeOut}
                    </Text>
                )} </Text>
            </View>

        </View>
    )
}

export default VisitHistoric

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 20,
        marginBottom: 15,

        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },
    gym: {
        fontSize: 14,
        fontWeight: "600",
        color: "#000",
    },
    typeBadge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 999,
        marginRight: 8,
    },
    typeText: {
        fontSize: 13,
        fontWeight: "600",
    },
    date: {
        fontSize: 14,
        fontWeight: "500",
        color: "#000",
        marginBottom: 10
    },
    hour: {
        fontSize: 14,
        fontWeight: "500",
        color: "#000",
        marginBottom: 10
    }
})