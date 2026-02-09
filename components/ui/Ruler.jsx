import React from "react";
import { View, StyleSheet } from "react-native";
import { RulerPicker } from "react-native-ruler-picker";

const Ruler = ({
    onChange,
    min,
    max,
    step,
    unit,
}) => {
    return (
        <View style={styles.container}>
            <RulerPicker
                height={50}
                min={min}
                max={max}
                step={step}
                fractionDigits={1}
                onValueChangeEnd={onChange}
                gapBetweenSteps={12}
                stepWidth={4}
                indicatorHeight={40}
                indicatorColor="#8B5CF6"
                shortStepHeight={10}
                longStepColor="#828282"
                longStepHeight={20}

                valueTextStyle={styles.value}
                unit={unit}
                unitTextStyle={styles.unit}
            />
        </View>
    );
};

export default Ruler;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,   
    },

    value: {
        fontSize: 60,
        fontWeight: "800",
        color: "#1f1f1f",
    },
    unit: {
        fontSize: 20,
        fontWeight: "600",
        color: "#1f1f1f",

    }
});
