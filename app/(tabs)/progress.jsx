import { View, Text } from 'react-native'
import AppView from '@/components/layout/AppView'
import TabHeader from '@/components/layout/TabHeader'
import React from 'react'
import BMICard from '@/components/ui/BMI'

const Progress = () => {
  return (
    <AppView>

      <TabHeader 
        title={"Progrès"}
        subtitle={"Suivez votre évolution"}
        style={{marginBottom: 32}}
      />

      <BMICard 
        bmi={24.5}
      />



    </AppView>
  )
}

export default Progress