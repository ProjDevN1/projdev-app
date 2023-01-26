import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const correctLogin = true

const LoginScreen = ({navigation, route}) => {
    return (
      <View>
        <Text>Login Screen</Text>
        <TextInput style={{height: 40}} placeholder="Username"/>
        <TextInput style={{height: 40}} placeholder="Password"/>
        <Button title="Login" onPress={() => checkLogin(navigation)}/>
      </View>
    );
};

const checkLogin = (navigation) => {
    if (correctLogin == true) {
        navigation.navigate('Home')
    }
    else {
        Alert.alert('Incorrect login', 'Wrong password or username', [{text: 'OK'}], {cancelable: true})
    }
};


export default LoginScreen