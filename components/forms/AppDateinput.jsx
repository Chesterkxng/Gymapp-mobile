import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DateInput({
    label,
    value,
    onChange,
    placeholder,
    minimumDate,
    maximumDate,
}) {
    const [show, setShow] = useState(false);

    const [tempDate, setTempDate] = useState(value || new Date());

    const handleChange = (_, selectedDate) => {

        if (Platform.OS === "android") {
            setShow(false);
            if (selectedDate) onChange(selectedDate);
        } else {
            if (selectedDate) setTempDate(selectedDate);
        }
    };

    const confirmIOS = () => {
        onChange(tempDate);
        setShow(false);
    };

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}

            <Pressable
                style={styles.input}
                onPress={() => setShow(true)}
            >

                <Text
                    style={[
                        styles.text,
                        !value && styles.placeholder,
                    ]}
                >
                    {value
                        ? value.toLocaleDateString("fr-FR")
                        : placeholder}
                </Text>
            </Pressable>

            {show && (
                <View>
                    {Platform.OS === "ios" && (
                        <View style={styles.toolbar}>
                            <Pressable onPress={() => setShow(false)}>
                                <Text style={styles.cancel}>Annuler</Text>
                            </Pressable>

                            <Pressable onPress={confirmIOS}>
                                <Text style={styles.done}>OK</Text>
                            </Pressable>
                        </View>
                    )}
                    <DateTimePicker
                        value={value || new Date()}
                        mode="date"
                        locale="fr-FR"
                        display={Platform.OS === "ios" ? "spinner" : "default"}
                        minimumDate={minimumDate}
                        maximumDate={maximumDate}
                        onChange={handleChange}
                    />
                </View>
            )}
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
        paddingVertical: 13,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },

    text: {
        fontSize: 16,
        color: "#101828",
    },

    placeholder: {
        color: "#98A2B3",
    },

    toolbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: "#F9FAFB",
        marginTop: 5
    },

    cancel: {
        fontSize: 16,
        color: "#667085",
    },

    done: {
        fontSize: 16,
        fontWeight: "600",
        color: "#6D4AFF",
    },

});
