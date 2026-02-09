import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { router } from 'expo-router'
import AppView from '@/components/layout/AppView'
import React from 'react'
import ProfileCard from '@/components/ui/ProfileCard'
import TabHeader from '@/components/layout/TabHeader'
import MenuGroup from '@/components/ui/MenuGroup'
import MenuItem from '@/components/ui/MenuItem'

const profile = () => {
  return (
    <AppView>
      <TabHeader
        title={"Profil"}
        style={{ marginBottom: 32 }}
      />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        fadingEdgeLength={0}
        overScrollMode='never'
      >

        <ProfileCard
          name={"Goita Cheick Salif"}
          memberId={"FP-2024-87654321"}
          gender={false}
        />


        <MenuGroup
          label={"MES INFORMATIONS"}
          menuItems={[
            {
              label: "Identité",
              icon: "idCard",
              onPress: () => router.push('/profile/identity')
            },
            {
              label: "Adresse",
              icon: "addressBook",
              onPress: () => router.push('/profile/address')
            },
            {
              label: "Santé",
              icon: "heart",
              onPress: () => router.push('/profile/health')
            },

          ]}
        />

        <MenuGroup
          label={"ABONNEMENTS ET PAIMENTS"}
          menuItems={[
            {
              label: "Abonnements",
              icon: "card",
              onPress: () => router.push('/subscription')
            },
            {
              label: "Paiements",
              icon: "payment",
              onPress: () => router.push('/payment')
            },

          ]}
        />

        <MenuItem
          icon={"logout"}
          label={"Déconnexion"}
          style={styles.logout}
          onPress={() => router.push('/login')}
        />

      </ScrollView>
    </AppView>
  )
}

export default profile

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 1,
    paddingBottom: 70,
  },
  logout: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  }
})