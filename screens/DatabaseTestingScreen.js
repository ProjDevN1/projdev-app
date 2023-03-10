import { Text, View, SafeAreaView, Pressable } from 'react-native'
import React, { useState } from 'react'


import { tempGetGig } from '../api/api.js'
import { getCurrentTime, getCurrentDate } from '../api/DataHandling.js' //IRA'S TEST THINGY 
import { getOngoingGigs } from '../api/api.js'


//In progress

export default function DatabaseTestingScreen() {
    const [data, setData] = useState('')

    async function getData(){
        const gigData = await tempGetGig()
        setData(gigData)
    }



  return (
    //calling the function on layout is not best practice, using useEffect is better
    //BUT: you need to specify that the useEffect runs only once, otherwise it will run in an infinite loop
    //because of how things get rendered in react. We do not want to do an infinite loop of reads in the database
    <SafeAreaView onLayout={getData}>
        <Text>Screen in progress, will add functionality as needed</Text>
        <Text>Under here is fetched start location from gig_1</Text>
        <Text>{data.startLocation}</Text>

        <Pressable onPress={() => getOngoingGigs()}>
					<Text>IRA'S TEST PRESSABLE (don't remove pls)</Text>
				</Pressable>

    </SafeAreaView>
  )
}


