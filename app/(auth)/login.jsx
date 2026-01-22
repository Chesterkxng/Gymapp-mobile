import { useRouter } from 'expo-router'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React,  {useState} from 'react'
import AuthView from '@/components/layout/AuthView'
import AuthInput from '@/components/forms/AuthInput'
import AuthButton from '@/components/forms/AuthButton'

const Login = () => {

  const router = useRouter();

  return (
    <AuthView>

      <View style={styles.content}>
        <AuthInput
          label={"Identifiant"}
          placeholder={"Email ou ID membre"}
          IconName={"idCard"}
        />

        <AuthInput
          label={"Mot de passe"}
          placeholder={"Mot de passe"}
          IconName={"password"}
          secureTextEntry
        />


        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push("/forgot-password")}
        >
          <Text style={[styles.text, {
            textAlign: "right"
          }]}>
            Mot de passe oublié ?
          </Text>
        </TouchableOpacity>

        <AuthButton
          title={"Se connecter"}
          onPress={() => router.push("/home")}
        />



        <Text style={[styles.text, {
          marginTop: 35,
          textAlign: "center"
        }]}>
          Pas encore de compte ? {" "}
          <Text style={{
            textDecorationLine: "underline",
            fontWeight: "600",
          }}>
            Créer un compte

          </Text>
        </Text>
      </View>


    </AuthView>
  )
}

export default Login

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 14,
  }
})