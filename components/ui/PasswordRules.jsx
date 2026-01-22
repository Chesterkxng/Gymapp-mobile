import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import Icon from "@/components/ui/Icon";


export default function PasswordRules({
    password,
    confirmPassword,
    onValidityChange
}) {
    const rules = [
        password.length >= 8,                  // length
        /[A-Z]/.test(password),                // uppercase
        /[0-9]/.test(password),                // number
        /[!@#$%^&*_\-+=]/.test(password),      // special
        password.length > 0 &&
        confirmPassword.length > 0 &&
        password === confirmPassword,        // match
    ];

    const isValid = rules.every(Boolean);

    useEffect(() => {
        onValidityChange?.(isValid);
    }, [isValid, onValidityChange]);

    const labels = [
        "Au moins 8 caractères",
        "Une majuscule",
        "Un chiffre",
        "Un caractère spécial",
        "Les mots de passe correspondent",
    ];


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sécurité du mot de passe :</Text>

            {rules.map((valid, index) => {

                return (
                    <View key={index} style={styles.rule}>
                        <Icon
                            name={valid ? "check" : "cross"}
                            size={16}
                            color={valid ? "#22C55E" : "#F87171"}
                        />
                        <Text
                            style={[
                                styles.text
                            ]}
                        >
                            {labels[index]}
                        </Text>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255,255,255,0.12)",
        borderRadius: 14,
        padding: 16,
        marginTop: 16,
        marginBottom: 24
    },
    title: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 12,
    },
    rule: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    text: {
        fontSize: 14,
        marginLeft: 8,
        color: "#FFFFFF"
    },
});