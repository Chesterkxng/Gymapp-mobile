import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "@/components/ui/Icon";

export default function PaymentCard({
    type,
    title,
    seller,
    date,
    amount,
    paymentMethod,
    onPress,
}) {

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
        sale: {
            badgeBg: "#E0E7FF",
            textColor: "#432DD7",
            label: "Achat",
        }
    };

    const typeConfig = TYPE_STYLES[type] || TYPE_STYLES.subscription;



    return (
        <Pressable style={styles.card} onPress={onPress}>

            <View style={styles.left}>

                <View style={styles.badges}>
                    <View style={[styles.typeBadge,
                    { backgroundColor: typeConfig.badgeBg }
                    ]}>
                        <Text style={[styles.typeText, { color: typeConfig.textColor }]}>{typeConfig.label}</Text>
                    </View>
                </View>

                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{seller}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>

            {/* Right */}
            <View style={styles.right}>
                <Text style={styles.amount}>{amount}</Text>
                <Text style={styles.method}>{paymentMethod}</Text>
            </View>

            <Icon name="rightChevron" size={20} color="#99A1AF" />
        </Pressable>
    );
}


const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 20,
        marginBottom: 12,

        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 4,
    },

    left: {
        flex: 1,
    },

    badges: {
        flexDirection: "row",
        marginBottom: 8,
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

    title: {
        fontSize: 18,
        fontWeight: "700",
        color: "#101828",
        marginBottom: 6,
    },

    subtitle: {
        fontSize: 14,
        fontWeight: "400",
        marginBottom: 6,
        color: "#212c44"
    },

    date: {
        fontSize: 14,
        color: "#667085",
    },

    right: {
        alignItems: "flex-end",
        marginRight: 12,
    },

    amount: {
        fontSize: 18,
        fontWeight: "700",
        color: "#101828",
    },

    method: {
        fontSize: 12,
        color: "#6A7282",
        marginTop: 1,
    },
});
