import { View, Dimensions } from "react-native";
import { useMemo } from "react";
import {
    VictoryChart,
    VictoryLine,
    VictoryScatter,
    VictoryAxis,
    VictoryTooltip,
} from "victory-native";
import { formatDate } from "@/utils/datetime";

const WIDTH = Dimensions.get("window").width - 60;

export default function WeightChart({
    data,
    XaxisLabel = false,
    style,
}) {

    const sortedData = useMemo(() => {
        return [...data].sort(
            (a, b) => new Date(a.date) - new Date(b.date)
        );
    }, [data]);

    const values = sortedData.map(d => d.value);
    const min = Math.min(...values);
    const max = Math.max(...values);

    const yMin = Math.floor((min - 5) / 5) * 5;
    const yMax = Math.ceil((max + 5) / 5) * 5;

    const xTickValues = sortedData.map(d => d.date);

    return (
        <View style={[style]}>
            <VictoryChart
                width={WIDTH}
                height={220}
                domain={{ y: [yMin, yMax] }}
                padding={{ top: 20, bottom: 20, left: 30, right: 20 }}
                domainPadding={{ x: 10, y: 10 }}
            >

                <VictoryAxis
                    style={{
                        axis: { stroke: "#9CA3AF" },
                        ticks: { stroke: "#9CA3AF" },

                        tickLabels: {
                            fill: XaxisLabel ? "#9CA3AF" : "transparent",
                            fontSize: 12,
                            padding: 8,
                        },
                        grid: {
                            stroke: "#E5E7EB",
                            strokeDasharray: "4",
                        },
                    }}
                    tickFormat={(t) => formatDate(t, { month: "short" })}
                    tickValues={XaxisLabel ? xTickValues : []}
                />


                <VictoryAxis
                    dependentAxis

                    style={{
                        axis: { stroke: "#9CA3AF" },
                        ticks: { stroke: "#9CA3AF" },
                        tickLabels: {
                            fill: "#9CA3AF",
                            fontSize: 12,
                            padding: 4,
                        },
                        grid: {
                            stroke: "#E5E7EB",
                            strokeDasharray: "4",
                        },
                    }}
                />

                <VictoryLine
                    data={sortedData}
                    x="date"
                    y="value"
                    interpolation="monotoneX"
                    style={{
                        data: {
                            stroke: "#8B5CF6",
                            strokeWidth: 2.2,
                            strokeLinecap: "round",
                        },
                    }}
                />

                <VictoryScatter
                    data={sortedData}
                    x="date"
                    y="value"
                    size={5}
                    labels={({ datum }) =>
                        `${datum.value} kg\n${formatDate(datum.date, { day: "numeric", month: "short" })}`
                    }
                    labelComponent={
                        <VictoryTooltip
                            renderInPortal={false}
                            flyoutStyle={{
                                fill: "#8B5CF6",
                                stroke: "transparent",
                            }}
                            style={{
                                fill: "#FFFFFF",
                                fontSize: 12,
                                fontWeight: "600",
                            }}
                            cornerRadius={6}
                            pointerLength={6}
                        />
                    }
                    style={{
                        data: {
                            fill: "#8B5CF6",
                            stroke: "#FFFFFF",
                            strokeWidth: 2,
                        },
                    }}
                />

            </VictoryChart>

        </View>
    );
}


