import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

{/*Under here imports for screens contained in other files in the components folder*/}

import LoginScreen from './components/login'
import HomeScreen from './components/home';

{/*Initializes the stack navigator module, used to navigate between screens*/}
const Stack = createNativeStackNavigator();


{/*This is the main app function*/}
export default function App() {
  return (
    <NavigationContainer> {/*Contains the main navigation stack, don't touch unless you want to add screen*/}
      <Stack.Navigator> {/*Under this you can add screens contained in other files to the stack*/}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Applikaatio perkele'}}
        />
        <Stack.Screen name="Home" component={HomeScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};