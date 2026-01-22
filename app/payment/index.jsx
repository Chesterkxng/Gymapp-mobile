import { View, Text } from 'react-native'
import React from 'react'
import AppView from '@/components/layout/AppView'
import NavBack from '@/components/layout/NavBack'
import TabHeader from '@/components/layout/TabHeader'
import PaymentCard from '@/components/ui/PaymentCard'

const index = () => {
    return (
        <AppView>

            <NavBack />

            <TabHeader
                title={"Paiements"}
                subtitle={"HISTORIQUE"}
                style={{ marginBottom: 32 }}
            />

            <PaymentCard
                title="FitPass Premium - Janvier 2026"
                date="15 Jan 2026"
                type='subscription'
                seller={"FITZONE"}
                amount="49.00€"
                paymentMethod="Carte"
                onPress={() => { }}
            />

             <PaymentCard
                title="Séance de yoga"
                date="18 Jan 2026"
                type='session'
                seller={"WEZEUX"}
                amount="10.00€"
                paymentMethod="Wave"
                onPress={() => { }}
            />

            <PaymentCard
                title="Protéines Whey"
                date="22 Jan 2026"
                type='sale'
                seller={"IVOIRE PROTEINS"}
                amount="40000 XOF"
                paymentMethod="Orange Money"
                onPress={() => { }}
            />



        </AppView>
    )
}

export default index