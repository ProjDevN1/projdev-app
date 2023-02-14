import { View, Text, SectionList, Pressable } from 'react-native'
import React from 'react'

import { STYLES } from '../constants/styles'


//Example data to allow for list and item styling
//Will be replaced by data pulled from server
const gig_1 = {
    pickup: 'Vladivostok',
    destination: 'Lisbon',
    start_time: '00.00 - 01.00',
    arrival_time: '12.00 - 13.00',
    reward: '3€'
}

const gig_2 = {
    pickup: 'Utsjoki',
    destination: 'Timbuktu',
    start_time: '22.00 - 24.00',
    arrival_time: '15.00 - 18.00',
    reward: '100€'
}

const data = [ //The title of a list section is the date of the gig
    {
        title: 'February 1st 2029',
        data: [gig_1, gig_2]
    },
]

const GigListScreen = () => {
  return (
    <View>
      <SectionList
        sections = {data}
        keyExtractor = {(item, index) => item + index}
        renderItem = {({item}) => ( // Under this is the frontend code for each of the individual gigs.
            <View>
                <Text>From: {item.pickup}</Text>
                <Text>To: {item.destination}</Text>
                <Text>{item.reward}</Text>
                <Text>Start time: {item.start_time}</Text>
                <Text>Arrival time: {item.arrival_time}</Text>
            </View>
        )}
        renderSectionHeader={({section: {title}}) => ( //This renders the title of the list section, in this case the date of the gig
            <Text>{title}</Text>
        )}
      />
        <Pressable style= {STYLES.button}>
           <Text style={{color: 'white'}}> Search </Text>
        </Pressable>
        <Pressable style= {STYLES.button}>
           <Text style={{color: 'white'}}> Active gigs </Text>
        </Pressable>
        <Pressable style= {STYLES.button}>
           <Text style={{color: 'white'}}> Profile </Text>
        </Pressable>
    </View>
  )
}

export default GigListScreen