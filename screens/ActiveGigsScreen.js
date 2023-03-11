import { View, Text, Pressable, SafeAreaView, Button, FlatList } from 'react-native'
import React, { useState } from 'react'

import { STYLES } from '../constants/styles'
import { activeGigsData } from '../api/api'


//This is the frontend code for an individual list item
const Item = ({title, addInfo, arrivalAddress, arrivalTime, estimatedTime, leaveTime, reward, startAddress, vehicle}) => (
  <SafeAreaView>
    <Text>{title}</Text>
    <Text>{leaveTime}</Text>
    <Text>{arrivalTime}</Text>
    <Text>{vehicle}</Text>
    <Text>{startAddress}</Text>
    <Text>{arrivalAddress}</Text>
    <Text>{estimatedTime}</Text>
    <Text>{addInfo}</Text>
    <Text>{reward}€</Text>
  </SafeAreaView>
)

//Currently has no way to inform user if there is no active gigs

const ActiveGigsScreen = ({navigation}) => {
  return (

    <SafeAreaView>
      <FlatList
        data={activeGigsData}
        renderItem={({item}) => <Item 
          title={item.title}
          addInfo={item.addInfo}
          arrivalAddress={item.arrivalAddress}
          arrivalTime={item.arrivalTime}
          estimatedTime={item.estimatedTime}
          leaveTime={item.leaveTime}
          reward={item.reward}
          startAddress={item.startAddress}
          vehicle={item.vehicle}
        />}
        keyExtractor={item => item.id}
      />

      <Pressable style= {STYLES.button} onPress={() => navigation.navigate('GigList')}>
           <Text style={{color: 'black', height: 20, width: 50, marginVertical: 20}}> Search </Text>
        </Pressable>

        <Pressable style= {STYLES.button}>
           <Text style={{color: 'black', height: 20, width: 50, marginVertical: 20}}> Active gigs </Text>
        </Pressable>

        <Pressable style= {STYLES.button}>
           <Text style={{color: 'white'}}> Profile </Text>
        </Pressable>

        
    </SafeAreaView>

  )
}

export default ActiveGigsScreen