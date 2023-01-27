import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


{/*Placeholder variable for checking login details*/}
const correctLogin = true


{/*Main loginscreen function*/}
const LoginScreen = ({navigation, route}) => {
    return (
      <View> {/*The content of the screen is contained in a view object, multiple of these can be stacked to style the screen*/}
        <Text>Login Screen</Text>
        <TextInput style={{height: 40}} placeholder="Username"/>
        <TextInput style={{height: 40}} placeholder="Password"/>
        <Button title="Login" onPress={() => checkLogin(navigation)}/> {/*Calls the checkLogin function when the button is pressed*/}
      </View>
    );
};

const checkLogin = (navigation) => { {/*Checks whether login details are correct, alert pops up if they are not*/}
    if (correctLogin == true) { {/*Atm always true because the correctLogin thing hardcoded in*/}
        {/*Uses the navigation module to switch to the home screen in the navigation stack*/}
        navigation.navigate('Home')
    }
    else {
        Alert.alert('Incorrect login', 'Wrong password or username', [{text: 'OK'}], {cancelable: true})
    }
};

{/*Export the loginscreen function so it can be used in the navigation stack in the app.js file*/}
export default LoginScreen