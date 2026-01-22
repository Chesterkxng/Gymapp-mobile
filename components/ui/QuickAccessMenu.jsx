import { View, Text, StyleSheet } from "react-native";
import QuickAccesItem from "./QuickAccessItem";
import { router } from "expo-router";

export default function QuickAccessMenu({
    config = []
}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Accès rapide</Text>

            <View style={styles.grid}>
                {
                    config.map((item, index) => (
                        <QuickAccesItem
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            icon={item.icon}
                            gradiantColors={item.gradiantColors}
                            onPress={() => router.push(item.route)}
                        />
                    ))
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },

    title: {
        fontSize: 18,
        fontWeight: "700",
        color: "#101828",
        marginBottom: 16,
    },

    grid: {
        flexDirection: "row",
        flexWrap: 'wrap' ,
        gap: 16,
        justifyContent: "center"
    },
});
