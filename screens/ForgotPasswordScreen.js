import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'

const ForgotPasswordScreen = () => {
  return (
    <View>

      <Text>Forgot your password?</Text>
      <Text>We will send you a message to recover your account</Text>
      <Text>Email:</Text>

      <TextInput placeholder='Typed email address goes here'></TextInput>
      
      <Pressable>
        <Text>Recover account</Text>  
      </Pressable>

    </View>
  )
}

export default ForgotPasswordScreen