import { View, Text, StyleSheet, ScrollView } from 'react-native'
import AppView from '@/components/layout/AppView'
import TabHeader from '@/components/layout/TabHeader'
import React, { useState } from 'react'
import BMICard from '@/components/ui/BMI'
import WeightSummaryCard from '@/components/ui/weightSummaryCard'
import VisitCalendar from '@/components/ui/VisitCalendar'
import VisitCard from '@/components/ui/VisitCard'
import VisitHistoric from '@/components/ui/VisitHistoric'
import Tabs from '@/components/ui/Tab'
import { router } from 'expo-router'

const Progress = () => {

  const tabs = [
    { key: "data", label: "Mes données" },
    { key: "visits", label: "Visites" },
  ];

  const [active, setActive] = useState("data");

  const [currentMonth, setCurrentMonth] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  });

  return (
    <AppView>

      <TabHeader
        title={"Progrès"}
        subtitle={"Suivez votre évolution"}
        style={{ marginBottom: 32 }}
      />

      <Tabs
        tabs={tabs}
        value={active}
        onChange={setActive}
      />

      {active === "data" && (
        <>
          <WeightSummaryCard
            data={[78.8, 90, 80, 81]}
            onPress={()=> router.push('/progress/weightHistoric')}
           />

          <BMICard
            bmi={24.5}
          />
        </>
      )}



      {active === "visits" && (
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          fadingEdgeLength={0}
          overScrollMode='never'
        >
          <View style={styles.visitCardRow}>
            <VisitCard
              title={"JAN 2026"}
              iconName={"entry"}
              count={17}
            />

            <VisitCard
              title={"TOTAL 2026"}
              iconName={"total"}
              count={55}
            />
          </View>

          <VisitCalendar onMonthChange={setCurrentMonth} />

          <Text style={styles.title}>HISTORIQUE</Text>
          <VisitHistoric
            type={"subscription"}
            gymName={"GYMNASE DE LA PALMERAIE OUI OUI"}
            date={"15-12-2026"}
            timeIn={"15:00"}
            timeOut={"17:00"}
          />

          <VisitHistoric
            type={"session"}
            gymName={"EQUINOX"}
            date={"15-12-2026"}
            timeIn={"15:00"}
          />


        </ScrollView>
      )}



    </AppView>
  )
}

export default Progress

const styles = StyleSheet.create({
  content: {
    paddingBottom: 70,
    paddingHorizontal: 1
  },
  visitCardRow: {
    flexDirection: "row",
    gap: 20
  },
  title: {
    fontWeight: "400",
    fontSize: 16,
    color: "#4A5565",
    marginBottom: 20
  }
})