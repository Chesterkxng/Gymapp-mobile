import { View, Text, StyleSheet } from 'react-native'
import { formatDate } from '@/utils/datetime'
import React from 'react'

const WeightHistoricCard = ({
    date,
    value,
    delta,
    unit
}) => {
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.date}>{formatDate(date, { day: "2-digit", month: "short", year: "numeric" })}</Text>
                <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                    {delta !== null && (
                        <Text
                            style={[
                                styles.delta,
                                delta > 0 && { color: "#178740" },
                                delta < 0 && { color: "#EF4444" },
                                delta === 0 && { color: "#9CA3AF" },
                            ]}
                        >
                            {delta === 0
                                ? `– 0 ${unit}`
                                : `${delta > 0 ? "↑" : "↓"} ${Math.abs(delta)} ${unit}`}
                        </Text>
                    )}
                    {delta === null && (
                        <Text style={[styles.delta, { color: "#9CA3AF" }]}>
                            Référence
                        </Text>
                    )}

                </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                <Text style={styles.value}>{value}</Text>
                <Text style={styles.unit}>{unit}</Text>
            </View>
        </View>
    )
}

export default WeightHistoricCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        paddingVertical: 16,
        paddingHorizontal: 18,
        marginBottom: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 3,
    },
    date: {
        fontSize: 16,
        fontWeight: "600",
        color: "#5f6775",
        marginBottom: 5
    },

    delta: {
        fontSize: 16,
        fontWeight: "400",
    },
    value: {
        fontSize: 25,
        fontWeight: "600",
        color: "#111827",
    },

    unit: {
        fontSize: 14,
        fontWeight: "600",
        color: "#111827",
        marginLeft: 6,
    },
})