import * as React from 'react';
import { Text, View, Pressable } from 'react-native';

const LandingScreen = ({navigation}) => {
    return (
      <View>
        <Text>Main Title (Or logo?)</Text>
        <Text>Lorem ipsum etc</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text>Login</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Registration')}>
          <Text>Register</Text>
        </Pressable>
      </View>
    );
  
};

export default LandingScreen