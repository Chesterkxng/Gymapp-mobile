import { Text, StyleSheet, View, Pressable } from 'react-native'
import { formatDate } from '@/utils/datetime';

const DateNavigator = ({
    date,
    period,
    onPrev,
    onNext,
    disableNext,
    style
}) => {
    return (
        <View style={[styles.container, style]}>
            <Pressable onPress={onPrev}>
                <Text style={styles.arrow}>◀</Text>
            </Pressable>

            <Text style={styles.label}>
                {formatDate(date, period === "yearly" ? { year: "numeric" } : { month: "long", year: "numeric" })}
            </Text>

            <Pressable onPress={onNext} disabled={disableNext}>
                <Text style={[styles.arrow,
                disableNext && styles.disabled
                ]}>▶</Text>
            </Pressable>
        </View>
    );
};

export default DateNavigator


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    arrow: {
        fontSize: 15,
        color: "#8B5CF6",
        paddingHorizontal: 8,
    },
    label: {
        fontSize: 18,
        fontWeight: "600",
        color: "#101828",
    },
    disabled: {
        opacity: 0.6
    }
});

