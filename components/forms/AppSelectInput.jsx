import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from "react-native";
import Modal from "react-native-modal";

export default function AppSelectInput({
    label,
    value,
    options,
    onChange,
    placeholder,
}) {
    const [visible, setVisible] = useState(false);

    const selected = options.find(o => o.value === value);

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}

            <Pressable
                style={styles.input}
                onPress={() => setVisible(true)}
            >
                <Text
                    style={[
                        styles.text,
                        !selected && styles.placeholder,
                    ]}
                >
                    {selected?.label || placeholder}
                </Text>
            </Pressable>

            <Modal
                isVisible={visible}
                onBackdropPress={() => setVisible(false)}
                onBackButtonPress={() => setVisible(false)}

                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInTiming={300}
                animationOutTiming={300}

                backdropTransitionInTiming={300}
                backdropTransitionOutTiming={300}

                useNativeDriver
                hideModalContentWhileAnimating
            >
                <View style={styles.modal}>
                    {options.map((opt, index) => (
                        <Pressable
                            key={opt.value}
                            style={[styles.option,
                            index !== options.length - 1 && styles.optionBorder,
                            ]}
                            onPress={() => {
                                onChange(opt.value);
                                setVisible(false);
                            }}
                        >
                            <Text style={styles.optionText}>
                                {opt.label}
                            </Text>
                        </Pressable>
                    ))}
                </View>
            </Modal>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },

    label: {
        fontSize: 14,
        fontWeight: "500",
        color: "#364153",
        marginBottom: 8,
    },

    input: {
        height: 50,
        borderRadius: 14,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 16,
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },

    text: {
        fontSize: 16,
        color: "#364153",
    },

    placeholder: {
        color: "#596a85",
    },

    modal: {
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        paddingVertical: 8,
    },

    option: {
        paddingVertical: 13,
        paddingHorizontal: 16,
    },

    optionBorder: {
        borderBottomWidth: 1,
        borderBottomColor: "#E5E7EB",
    },

    optionText: {
        fontSize: 14,
        color: "#364153",
    },
});
