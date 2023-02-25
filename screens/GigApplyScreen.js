import { View, Text, Pressable } from 'react-native'
import React from 'react'

const GigApplyScreen = () => {
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
        <Text>Apply</Text>  
      </Pressable>

      <Pressable>
        <Text>Contact info</Text>  
      </Pressable>

    </View>
  )
}

export default GigApplyScreen