import { View, Text } from 'react-native'
import React, { useState } from 'react'
import AppView from '@/components/layout/AppView'
import NavBack from '@/components/layout/NavBack'
import TabHeader from '@/components/layout/TabHeader'
import AppTextInput from '@/components/forms/AppTextInput'
import AppButton from '@/components/forms/AppButton'
import AppSelectInput from '@/components/forms/AppSelectInput'
import FormView from '@/components/layout/FormView'

const Health = () => {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bloodGroup, setBloodGroup] = useState(null);
    const [rhesus, setRhesus] = useState(null);

    return (
        <AppView>
            <NavBack />

            <TabHeader
                title={"Identité"}
                style={{ marginBottom: 32 }}
            />

            <FormView>
                <AppTextInput
                    label={"Poids (kg)"}
                    placeholder={"Entrer votre poids"}
                    value={weight}
                    onChangeText={setWeight}
                    keyboardType={"numeric"}
                />

                <AppTextInput
                    label={"Taille (cm)"}
                    placeholder={"Entrer votre taille"}
                    value={height}
                    onChangeText={setHeight}
                    keyboardType={"numeric"}
                />


                <AppSelectInput
                    label="Groupe sanguin"
                    placeholder={"Selectionner votre groupe sanguin"}
                    value={bloodGroup}
                    onChange={setBloodGroup}
                    options={[
                        { label: "AB", value: "AB" },
                        { label: "A", value: "A" },
                        { label: "B", value: "B" },
                        { label: "O", value: "O" },
                    ]}
                />

                <AppSelectInput
                    label="Facteur Rhésus"
                    placeholder={"Selectionner votre rhésus sanguin"}
                    value={rhesus}
                    onChange={setRhesus}
                    options={[
                        { label: "+", value: "+" },
                        { label: "-", value: "-" },
                    ]}
                />


                <AppButton
                    title={"Enregistrer"}
                    icon={"save"}
                    onPress={() => { }}
                />

            </FormView>
        </AppView>
    )
}

export default Health