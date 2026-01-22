import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import AppView from '@/components/layout/AppView'
import TabHeader from '@/components/layout/TabHeader'
import NotificationButton from '@/components/ui/NotificationButton'
import SubscriptionResumeCard from '@/components/ui/subResumeCard'
import { router } from 'expo-router'
import QuickAccessMenu from '@/components/ui/QuickAccessMenu'

const Home = (
) => {

  const surname = 'Cheick GOITA';
  const quickAccesConfig = [
    {
      title: "QR Code",
      subtitle: "Accès salle",
      icon: "access",
      route: '/access',
      gradiantColors: ["#615FFF", "#9810FA"]
    },
    {
      title: "Paiments",
      subtitle: "Historique",
      icon: "card",
      route: '/payment',
      gradiantColors: ["#2B7FFF", "#0092B8"]
    },
    {
      title: "Mon Abonnement",
      subtitle: "Détails",
      icon: "idCard",
      route: '/subscription',
      gradiantColors: ["#FF6900", "#E7000B"]
    },
    {
      title: "Boutique",
      subtitle: "Nos articles",
      icon: "shop",
      route: '',
      gradiantColors: ["#00C950", "#009966"]
    }

  ]

  return (
    <AppView>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >


      <View style={styles.header}>
        <TabHeader
          title={`Bonjour, ${surname} 👋`}
          subtitle={"Prêt pour votre entrainement"}
          style={{ flex: 1 }}
        />

        <NotificationButton
          hasUnread
        />
      </View>

      <SubscriptionResumeCard
        gymName={"FITZONE"}
        packageName={"FitPass Premium"}
        endDate={"10/01/2026"}
        onPress={() => router.push("/subscription")}
      />

      <QuickAccessMenu 
        config={quickAccesConfig}
      />

      </ScrollView>

    </AppView>
  )
}

export default Home

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 32,
  },

  scrollView: {
    paddingBottom: 60,
  }
})