import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { STYLES } from '../constants/styles'

{/*This file contains the code for the home screen, which is imported in the main app.js file*/}

const HomeScreen = ({navigation}) => {
    return (
      <View>
        <Text>Homescreen</Text>
      </View>
    );
  
};

export default HomeScreen