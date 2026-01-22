import { View, Text } from 'react-native'
import React from 'react'
import AppView from '@/components/layout/AppView'
import NavBack from '@/components/layout/NavBack'
import TabHeader from '@/components/layout/TabHeader'
import SubscriptionCard from '@/components/ui/SubscriptionCard'

const Subscription = () => {
  return (
    <AppView>
      <NavBack />

      <TabHeader
        title={"Abonnements"}
        subtitle={"Consulter vos abonnements actuels dans nos salles partenaires"}
        style={{ marginBottom: 32 }}
      />

      <SubscriptionCard
        packageName="FitPass Premium"
        gymName="FITZONE"
        price="10000 XOF"
        period="mois"
        startDate="15 Août 2025"
        endDate="15 Février 2026"
        features={[
          "Accès illimité",
          "Espace cardio & musculation"
        ]}
      />


    </AppView>
  )
}

export default Subscription