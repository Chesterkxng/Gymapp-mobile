import { View, Text, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import React, { useState} from 'react'
import AuthView from '@/components/layout/AuthView'
import AuthInput from '@/components/forms/AuthInput'
import AuthButton from '@/components/forms/AuthButton'
import AuthHeader from '@/components/layout/AuthHeader'


const ForgotPasswordScreen = () => {

  const router = useRouter();

  const [email, setEmail] = useState("");

  return (

    <AuthView>

      <AuthHeader />

      <View style={styles.content}>

        <Text style={styles.title}>Mot de passe oublié</Text>

        <Text style={styles.description}>Entrez votre email et nous vous enverrons un lien pour réinitialiser votre mot de passe</Text>

        <AuthInput
          label={"Email"}
          placeholder={"votre@email.com"}
          value={email}
          onChangeText={setEmail}
          IconName={"email"}
        />

        <AuthButton
          title={"Envoyer le lien"}
          onPress={() => router.push("/reset-password")}
          style={styles.button}
        />

      </View>

    </AuthView>
  )
}

export default ForgotPasswordScreen

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
    marginBottom: 20,
  }
})