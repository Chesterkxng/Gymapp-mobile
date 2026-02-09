import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function BMICard({ bmi }) {


    const BMI_RULES = [
        { max: 16.5, label: "Dénutrition", color: "#2563EB" },
        { max: 18.5, label: "Maigreur", color: "#309bc9" },
        { max: 25, label: "Poids normal", color: "#22C55E" },
        { max: 30, label: "Surpoids", color: "#F59E0B" },
        { max: 35, label: "Obésité modérée", color: "#FB923C" },
        { max: 40, label: "Obésité sévère", color: "#EF4444" },
        { max: Infinity, label: "Obésité morbide", color: "#991B1B" },
    ];


    const getBMIPosition = (bmi) => {
        const min = 15;
        const max = 35;

        const clamped = Math.min(Math.max(bmi, min), max);

        return ((clamped - min) / (max - min)) * 100;
    };

    const getBMIStatus = (bmi) => { return BMI_RULES.find(rule => bmi < rule.max); }

    const status = getBMIStatus(bmi)

    return (
        <View style={styles.card}>
            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>IMC</Text>
                    <Text style={styles.subtitle}>Indice de masse corporelle</Text>
                </View>

                <Text style={styles.value}>{bmi.toFixed(1)}</Text>
            </View>

            {/* Progress bar */}
            <View style={styles.barWrapper}>
                <LinearGradient
                    colors={["#2B7FFF", "#00C950", "#F59E0B", "#FB2C36"]}
                    locations={[0, 0.4, 0.7, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.bar}
                />

                {/* Cursor */}
                <View
                    style={[
                        styles.cursor,
                        { left: `${getBMIPosition(bmi)}%` },
                    ]}
                />
            </View>

            {/* Labels */}
            <View style={styles.labels}>
                <Text style={styles.label}>Insuffisant</Text>
                <Text style={styles.label}>Normal</Text>
                <Text style={styles.label}>Surpoids</Text>
            </View>

            {/* Status */}
            <Text
                style={[
                    styles.status,
                    { color: status.color },
                ]}
            >
                {status.label}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 20,

        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 4,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    },

    title: {
        fontSize: 18,
        fontWeight: "600",
        color: "#101828",
    },

    subtitle: {
        fontSize: 14,
        color: "#6A7282",
    },

    value: {
        fontSize: 22,
        fontWeight: "600",
        color: "#101828",
    },

    barWrapper: {
        position: "relative",
        marginTop: 8,
    },

    bar: {
        height: 8,
        borderRadius: 999,
    },

    cursor: {
        position: "absolute",
        top: -4,
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
        borderColor: "#000",
        transform: [{ translateX: -7 }],
    },

    labels: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 9,
    },

    label: {
        fontSize: 12,
        color: "#98A2B3",
    },

    status: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: "600",
        textAlign: "center",
    },
});

