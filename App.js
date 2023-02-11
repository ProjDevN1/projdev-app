import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


//Under here imports for screens contained in other files in the screens folder

import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen';
import DevScreen from './screens/DevScreen';

//Initializes the stack navigator module, used to navigate between screens
const Stack = createNativeStackNavigator();


//This is the main app function
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dev" component={DevScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};