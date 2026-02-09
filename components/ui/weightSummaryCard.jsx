import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "@/components/ui/Icon";
import Svg, { Polyline, Circle } from "react-native-svg";



export default function WeightSummaryCard({
    value = 78.2,
    unit = "kg",
    data,
    onPress,
}) {


    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;

    const isFlat = data.length < 2 || min === max;


    const height = 20;
    const padding = 5;
    const pointGap = 16;

    const centerY = padding + height / 2;

    const svgHeight = height + padding * 2;
    const svgWidth = (data.length - 1) * pointGap + padding * 2;

    const pointsData = data.map((v, i) => {
        const x = padding + i * pointGap;
        const y = isFlat ?
            centerY :
            padding +
            (1 - (v - min) / range) * height;
        return { x, y };
    });

    const points = pointsData
        .map(p => `${p.x},${p.y}`)
        .join(" ");


    return (
        <Pressable style={styles.card} onPress={onPress}>

            <View style={styles.header}>
                <Text style={styles.label}>POIDS</Text>
                <Icon name="rightChevron" size={20} color="#101828" />
            </View>

            <View style={styles.valueRow}>
                {/* Left value */}
                <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                    <Text style={styles.value}>{value}</Text>
                    <Text style={styles.unit}>{unit}</Text>
                </View>

                {/* Right sparkline */}
                <View style={[styles.sparkline, { height: svgHeight }]}>
                    <Svg width={svgWidth} height={svgHeight}>
                        <Polyline
                            points={points}
                            fill="none"
                            stroke="#8B5CF6"
                            strokeWidth={2.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        {pointsData.map((p, index) => (
                            <Circle
                                key={index}
                                cx={p.x}
                                cy={p.y}
                                r={4}
                                fill="#8B5CF6"
                            />
                        ))}
                    </Svg>
                </View>
            </View>

        </Pressable>
    );
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF", // beige clair
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 18,
        marginBottom: 16,

        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 3,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    label: {
        fontSize: 18,
        fontWeight: "600",
        color: "#101828",
        marginBottom: 8
    },

    valueRow: {
        flexDirection: "row",
        alignItems: "center"
    },

    value: {
        fontSize: 22,
        fontWeight: "600",
        color: "#111827",
    },

    unit: {
        fontSize: 14,
        fontWeight: "600",
        color: "#111827",
        marginLeft: 6,
        marginBottom: 2,
    },

    sparkline: {
        marginLeft: "auto",     // 👈 KEY LINE
        alignItems: "center",
        justifyContent: "center",
    },
});
