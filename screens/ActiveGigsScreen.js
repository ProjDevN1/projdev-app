import { View, Text, Pressable, SafeAreaView, Button, SectionList } from 'react-native'
import React, { useState } from 'react'

import { STYLES } from '../constants/styles'
import { getActiveGigs } from '../api/api'

//Example data to allow for list and item styling
//Will be replaced by data pulled from server


const ActiveGigsScreen = ({navigation}) => {
  const [activeGigs, setActiveGigs] = useState('')
  const [dataFetched, setDataFetched] = useState(false)

  async function getGigs() {
      const gigs = await getActiveGigs()
      setActiveGigs(gigs)
      setDataFetched(true)
  }


  function test() {
      console.log(activeGigs)
  }

  //Need to find a way to display shit on list, possibly need to make it into a component idk

  return (
    <SafeAreaView onLayout={getGigs}>

      <Pressable style= {STYLES.button} onPress={() => navigation.navigate('GigList')}>
           <Text style={{color: 'black', height: 20, width: 50, marginVertical: 20}}> Search </Text>
        </Pressable>

        <Pressable style= {STYLES.button}>
           <Text style={{color: 'black', height: 20, width: 50, marginVertical: 20}}> Active gigs </Text>
        </Pressable>

        <Pressable style= {STYLES.button}>
           <Text style={{color: 'white'}}> Profile </Text>
        </Pressable>

      <Button title='test' onPress={test}/>
        
    </SafeAreaView>

  )
}

export default ActiveGigsScreen