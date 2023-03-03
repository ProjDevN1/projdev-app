import { View, Text, Pressable } from 'react-native'
import React from 'react'

/*This screen is very similar to the GigApplyScreen, because apparently the 
only thing changing is that the apply-button changes to start-button*/

const GigStartScreen = () => {
  return (
    <View>
      <Text style={{fontSize: 36}}>Map goes here</Text>

    <Pressable>
      <Text>Settings icon here</Text>  
    </Pressable>

    <Pressable>
      <Text>Find icon here </Text>  
    </Pressable>

    <Text>Rating goes here</Text>
    <Text>Route:</Text>
    <Text>Turku–Helsinki</Text>
    <Text>Pickup time 00:00–14:00</Text>
    <Text>Delivery time 00:00–14:00</Text>
    <Text>Pay: 69eur</Text>
    <Text>Fuel budget 69eur</Text>
    <Text>Client name</Text>

    <Pressable>
      <Text>Start</Text>  
    </Pressable>

    <Pressable>
      <Text>Contact info</Text>  
    </Pressable>

    </View>
  )
}

export default GigStartScreen