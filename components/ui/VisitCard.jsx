import { View, Text, StyleSheet } from 'react-native'
import Icon from './Icon'
import React from 'react'

const VisitCard = ({
    title,
    iconName,
    count,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
                <View style={styles.iconWrapper}>
                    <Icon 
                        name={iconName}
                        size={48}
                        color='#6A7282'
                    />
                </View>

                <View>
                    <Text style={styles.count}>{count}</Text>
                </View>


            </View>
        </View>
    )
}

export default VisitCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 20,
        borderRadius: 14,
        marginBottom: 12,

        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3,
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 8,
        color: "#6A7282"
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    iconWrapper: {
        height: 50,
        width: 50,
        marginRight: 10
    },
    count: {
        fontSize: 30,
        fontWeight: "700",
        color: "#9810FA"
    }
})