import { StyleSheet } from 'react-native'
import { useState } from 'react'
import AppView from '@/components/layout/AppView'
import NavBack from '@/components/layout/NavBack'
import TabHeader from '@/components/layout/TabHeader'
import AppTextInput from '@/components/forms/AppTextInput'
import AppButton from '@/components/forms/AppButton'
import AppDateInput from '@/components/forms/AppDateinput'
import AppSelectInput from '@/components/forms/AppSelectInput'
import FormView from '@/components/layout/FormView'

const Identity = () => {

    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState(null);
    const [gender, setGender] = useState(null);

    return (
        <AppView>
            <NavBack />

            <TabHeader
                title={"Identité"}
                style={{ marginBottom: 32 }}
            />

            <FormView>
                <AppTextInput
                    label={"Nom"}
                    placeholder={"Entrer votre nom"}
                    value={surname}
                    onChangeText={setSurname}
                />

                <AppTextInput
                    label={"Prénom"}
                    placeholder={"Entrer votre prénom"}
                    value={name}
                    onChangeText={setName}
                />

                <AppDateInput
                    label={"Date de naissance"}
                    placeholder={"Selectionner votre date de naissance"}
                    value={birthDate}
                    onChange={setBirthDate}
                />

                <AppSelectInput
                    label="Genre"
                    placeholder={"Selectionner votre genre"}
                    value={gender}
                    onChange={setGender}
                    options={[
                        { label: "Homme", value: "male" },
                        { label: "Femme", value: "female" },
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

export default Identity

const styles = StyleSheet.create({

})