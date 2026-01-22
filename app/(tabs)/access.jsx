import { View, Text, StyleSheet } from 'react-native'
import AppView from '@/components/layout/AppView'
import React from 'react'
import AppButton from "@/components/forms/AppButton"
import QrCard from '@/components/ui/QRCard'
import TabHeader from '@/components/layout/TabHeader'

const Access = () => {
  return (
    <AppView>

      <TabHeader 
        title={"Accès"}
        subtitle={"Scannez ce QR code à l'entrée de la salle ou scannez le QR de la salle"}
        center
      />


      <View style={styles.content}>

        <QrCard
          value="FP-2024-87654321"
          memberId="FP-2024-87654321"
        />

        <AppButton
          title={"Scanner un QR code"}
          icon={"scan"}
        />
      </View>
    </AppView>
  )
}

export default Access

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
  },
})