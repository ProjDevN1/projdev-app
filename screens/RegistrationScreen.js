import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { STYLES } from '../constants/styles'


// Welcome message from registration button, needs function to work properly only shows popup "Welcome"

const verifyRegistration = () => {
    alert('Welcome')
}

// Main user interface, different fields for all needed inputs 

const RegistrationScreen = () => {
  return (
    <View>
      <Text>Register</Text> 

      <Text>Username:</Text>
      <TextInput placeholder='inputfield'></TextInput> 

      <Text>Password:</Text>
      <TextInput placeholder='inputfield'></TextInput>

      <Text>Re-enter password</Text>      
      <TextInput placeholder='inputfield'></TextInput>

      <Text>Email:</Text>
      <TextInput placeholder='inputfield'></TextInput>

      <Pressable style= {STYLES.button}>
        <Text style={{color: 'white'}}>Add drivers licence</Text>
      </Pressable>

      <Pressable style= {STYLES.button} onPress={() => verifyRegistration()}>
        <Text style= {{color: 'white'}}>Register</Text>
      </Pressable>

    </View>
  )
}

export default RegistrationScreen