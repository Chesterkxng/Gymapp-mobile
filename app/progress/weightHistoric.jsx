import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useState } from 'react'
import AppView from '@/components/layout/AppView'
import NavBack from '@/components/layout/NavBack'
import TabHeader from '@/components/layout/TabHeader'
import AppButton from '@/components/forms/AppButton'
import WeightHistoryList from '@/components/ui/WeightHistoricList'
import Tabs from '@/components/ui/Tab'
import WeightChart from '@/components/charts/WeightChart'
import DateNavigator from '@/components/ui/DateNavigator'
import { router } from 'expo-router'

import { filterByPeriod } from '@/utils/filter'


const WeightHistoric = () => {

    const today = new Date();

    const tabs = [
        { key: "weekly", label: "7 derniers jours" },
        { key: "monthly", label: "Mois" },
        { key: "yearly", label: "Année" },

    ];

    const [active, setActive] = useState("monthly");
    const [cursorDate, setCursorDate] = useState(new Date());


    /** Date navigation logic */

    /** Previous period based */
    const goPrev = () => {
        setCursorDate(d => {
            if (active === "yearly") {
                return new Date(d.getFullYear() - 1, 0, 1);
            }

            return new Date(d.getFullYear(), d.getMonth() - 1, 1);
        });
    };

    /** Next period based */
    const goNext = () => {
        setCursorDate(d => {
            if (active === "yearly") {
                return new Date(d.getFullYear() + 1, 0, 1);
            }
            return new Date(d.getFullYear(), d.getMonth() + 1, 1);
        });
    }

    /** Date boundaries logic */
    const isAtMax = (date, period) => {
        if (period === "yearly") {
            return date.getFullYear() >= today.getFullYear();
        }

        if (period === "monthly") {
            return (
                date.getFullYear() === today.getFullYear() &&
                date.getMonth() === today.getMonth()
            );
        }

        return date >= today;
    };

    const disableNext = isAtMax(cursorDate, active);


    const data = [
        { date: "2026-02-04", value: 70 },
        { date: "2026-02-05", value: 77.6 },
        { date: "2026-02-10", value: 77.9 },
        { date: "2026-02-11", value: 80 },
        { date: "2026-02-12", value: 77.6 },
        { date: "2026-03-13", value: 85 },
    ]

    const filteredData = filterByPeriod(data, active);


    return (
        <AppView>

            <NavBack />

            <TabHeader
                title={"Poids"}
                subtitle={"Suivez l'évolution de votre poids"}
                style={{ marginBottom: 32 }}
            />

            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
                fadingEdgeLength={0}
                overScrollMode='never'
            >

                <Tabs
                    tabs={tabs}
                    value={active}
                    onChange={setActive}
                />

                <View style={styles.weightChartCard}>
                    <DateNavigator
                        date={cursorDate}
                        period={active}
                        onNext={goNext}
                        onPrev={goPrev}
                        style={styles.dateNavigator}
                        disableNext={disableNext}

                    />

                    <WeightChart
                        data={filteredData}

                        XaxisLabel={active === "yearly"}
                    />
                </View>


                <AppButton
                    title={"Enregistrer une pésee"}
                    icon={"scale"}
                    onPress={() => router.push('/progress/weightAdd')}
                />

                <Text style={styles.title}>HISTORIQUE</Text>

                <WeightHistoryList 
                    data={filteredData}
                    unit='kg'
                />

            </ScrollView>

        </AppView>
    )
}

export default WeightHistoric

const styles = StyleSheet.create({

    content: {
        padding: 1,
        paddingBottom: 50,
    },

    title: {
        fontWeight: "400",
        fontSize: 16,
        color: "#4A5565",
        marginVertical: 20
    },
    weightChartCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 18,
        marginBottom: 16,

        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 6 },
        elevation: 3,
    },

});