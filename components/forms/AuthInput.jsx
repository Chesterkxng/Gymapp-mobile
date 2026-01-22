import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

import Icon from '../ui/Icon'

const AuthInput = ({
    label,
    placeholder,
    IconName,
    value,
    onChangeText,
    ...props
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                    <Icon
                        name={IconName}
                        size={20}
                        color={"#99A1AF"}
                    />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    placeholderTextColor={"#0A0A0A80"}

                    {...props}>

                </TextInput>
            </View>
        </View>
    )
}

export default AuthInput

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 14,
        height: 50,
        width: "100%",
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 15,
        overflow: "hidden",
    },
    iconContainer: {
        marginRight: 12
    },
    input: {
        flex: 1,
        fontSize: 16,
        height: "100%",
        paddingVertical: 0
    },
    label: {
        fontWeight: "500",
        fontSize: 14,
        marginBottom: 8,
        color: "#FFFFFF"
    }
})