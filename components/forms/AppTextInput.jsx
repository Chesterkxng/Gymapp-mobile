import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const AppTextInput = ({
    label,
    placeholder,
    value,
    onChangeText,
    ...props
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={"#596a85"}
                value={value}
                onChangeText={onChangeText}
                {...props}
            />
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    label: {
        fontWeight: '500',
        fontSize: 14,
        color: "#364153",
        marginBottom: 8
    },
    input: {
        paddingVertical: 13,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 14,
        height: 50,
        color: "#364153"
    }
})