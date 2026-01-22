import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'
import AppView from '@/components/layout/AppView'
import NavBack from '@/components/layout/NavBack'
import TabHeader from '@/components/layout/TabHeader'
import AppTextInput from '@/components/forms/AppTextInput'
import AppButton from '@/components/forms/AppButton'
import AppSelectInput from '@/components/forms/AppSelectInput'
import React from 'react'
import FormView from '@/components/layout/FormView'

const Address = () => {

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState(null);
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');

    return (
        <AppView>
            <NavBack />

            <TabHeader
                title={"Adresse"}
                style={{ marginBottom: 32 }}
            />

            <FormView>
                <AppTextInput
                    label={"Email"}
                    placeholder={"Entrer votre email"}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <AppTextInput
                    label={"Téléphone"}
                    placeholder={"Entrer votre téléphone"}
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />

                <AppSelectInput
                    label={"Pays"}
                    value={country}
                    onChange={setCountry}
                    placeholder={"Selectionner votre pays de résidence"}
                    options={[
                        { label: "Côte d'Ivoire", value: "CI" },
                        { label: "Sénégal", value: "SN" },
                        { label: "Bénin", value: "BJ" }
                    ]}
                />

                <AppTextInput
                    label={"Ville"}
                    placeholder={"Entrer votre ville de résidence"}
                    value={city}
                    onChangeText={setCity}
                    keyboardType="default"
                />

                <AppTextInput
                    label={"Adresse"}
                    placeholder={"Entrer votre adresse de résidence"}
                    value={address}
                    onChangeText={setAddress}
                    keyboardType="default"
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

export default Address

const styles = StyleSheet.create({
})