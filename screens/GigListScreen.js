import { View, Text, Pressable, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'

import { STYLES } from '../constants/styles'
import { availableGigsData } from '../api/api'

const Item = ({gig_id, startCity, endCity, reward, date, startTime, endTime}) => (
  <SafeAreaView>
    <Text>{date}</Text>
    <Text>{startCity}</Text>
    <Text>{endCity}</Text>
    <Text>{reward}€</Text>
    <Text>{startTime}</Text>
    <Text>{endTime}</Text>
  </SafeAreaView>
)


function List() {
  if (availableGigsData.length === 0) {
    return ( 
      <Text>No available gigs</Text> 
    )
  } else {
    return(
      <FlatList
      data={availableGigsData}
      renderItem={({item}) => <Item 
        startLocation={item.startLocation}
        endLocation={item.endLocation}
        reward={item.reward}
        startTime={item.startTime}
        endTime={item.endTime}
      />}
      keyExtractor={item => item.id}
      />
    )
  }
}
console.log(availableGigsData)

const GigListScreen = () => {
  return(
    <SafeAreaView>
      <List/>
    </SafeAreaView>
  )
}
export default GigListScreen