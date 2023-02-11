import * as React from 'react';
import { Text, View, TextInput, Alert, Pressable } from 'react-native';
import { STYLES } from '../constants/styles'


{/*Placeholder variable for checking login details*/}
const correctLogin = true


{/*Main loginscreen function*/}
const LoginScreen = ({navigation, route}) => {
    return (
      <View>
        <Text>Login Screen</Text>
        <TextInput style={{height: 40}} placeholder="Username"/>
        <TextInput style={{height: 40}} placeholder="Password"/>
        <Pressable style= {STYLES.button} onPress={() => checkLogin(navigation)}>
           <Text style={{color: 'white'}}> Login </Text>
      </Pressable>
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