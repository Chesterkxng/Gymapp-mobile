import { View, Text, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import AuthView from '@/components/layout/AuthView'
import AuthInput from '@/components/forms/AuthInput'
import AuthButton from '@/components/forms/AuthButton'
import AuthHeader from '@/components/layout/AuthHeader'
import PasswordRules from '@/components/ui/PasswordRules'

const ResetPasswordScreen = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    return (
        <AuthView>

            <AuthHeader />

            <View style={styles.content}>

                <Text style={styles.title}>Définir un mot de passe</Text>

                <Text style={styles.description}>Créer un mot de passe sécurisé pour votre compte</Text>

                <AuthInput
                    label={"Nouveau mot de passe"}
                    placeholder={"Mot de passe"}
                    IconName={"password"}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <AuthInput
                    label={"Confirmer le mot de passe"}
                    placeholder={"Mot de passe"}
                    IconName={"password"}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />

                <PasswordRules
                    password={password}
                    confirmPassword={confirmPassword}
                    onValidityChange={setIsPasswordValid}
                />
                
                <AuthButton
                    title={"Changer le mot de passe"}
                    disabled={!isPasswordValid}
                    onPress={() => {}}
                />

            </View>


        </AuthView>
    )
}

export default ResetPasswordScreen

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontWeight: "700",
        fontSize: 30,
        color: "#FFFFFF",
        marginBottom: 12,
    },
    description: {
        fontWeight: "400",
        fontSize: 16,
        color: "#FFFFFF",
        marginBottom: 20
    }
})