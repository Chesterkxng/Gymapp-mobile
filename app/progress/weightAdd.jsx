import { View, Text } from 'react-native'
import React, { useState } from 'react'

import AppView from '@/components/layout/AppView'
import NavBack from '@/components/layout/NavBack'
import TabHeader from '@/components/layout/TabHeader'
import AppButton from '@/components/forms/AppButton'
import SelectDateCalendar from '@/components/ui/SelectDateCalendar'
import Ruler from '@/components/ui/Ruler'

const WeightAdd = () => {

    const today = new Date().toISOString().split("T")[0];
    const [selectedDate, setSelectedDate] = useState(today);

    const [weight, setWeight] = useState(0);

    return (
        <AppView>

            <NavBack />

            <TabHeader
                title={"Poids"}
                subtitle={"Enregistrer une nouvelle pesée"}
                style={{ marginBottom: 32 }}

            />

            <SelectDateCalendar
                selectedDate={selectedDate}
                onDatePress={setSelectedDate}
                maxDate={today}
            />

            <Ruler
                value={weight}
                onChange={setWeight}
                min={0}
                max={300}
                step={0.1}
                unit={"kg"}
            />


            <AppButton
                title={"Enregistrer"}
                icon={"save"}
            />
        </AppView>
    )
}

export default WeightAdd