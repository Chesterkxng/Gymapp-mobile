import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TabHeader = ({
    title,
    subtitle,
    center = false, 
    style
}) => {
    return (
        <View style={style}>
            <Text style={[styles.title,
            center && {
                textAlign: 'center'
            }
            ]}>{title}</Text>
            {subtitle && (
                <Text style={[styles.subtitle,
                center && {
                    textAlign: 'center'
                }
                ]}>{subtitle}</Text>
            )}
        </View>
    )
}

export default TabHeader

const styles = StyleSheet.create({

    title: {
        fontWeight: "700",
        fontSize: 30,
        color: "#101828",
        marginBottom: 8,
    },
    subtitle: {
        fontWeight: "400",
        fontSize: 16,
        color: "#4A5565"
    }

})