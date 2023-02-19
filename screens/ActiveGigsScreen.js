import { View, Text, Pressable, SectionList } from 'react-native'
import React from 'react'

import { STYLES } from '../constants/styles'

//Example data to allow for list and item styling
//Will be replaced by data pulled from server
const gig_1 = {
  pickup: 'Vladivostok',
  destination: 'Lisbon',
  pickup_address: 'Some address',
  destination_address: 'Some address',
  car_model: 'Honda or smth idk',
  start_time: '00.00 - 01.00',
  arrival_time: '12.00 - 13.00',
  est_time: '12',
  reward: '3€',
  additional_info: 'Dont break car pls',
}

const gig_2 = {
  pickup: 'Utsjoki',
  destination: 'Timbuktu',
  pickup_address: 'Some address',
  destination_address: 'Some address',
  car_model: 'Honda or smth idk',
  start_time: '22.00 - 24.00',
  arrival_time: '15.00 - 18.00',
  est_time: '18',
  reward: '100€',
  additional_info: 'Dont break car pls',
}

const data = [ //The title of a list section in active gigs is the gig start and end city (Doesn't work properly atm, but will when we get db connections)
  {
      title: `${gig_1.pickup} - ${gig_1.destination}`,
      data: [gig_1, gig_2]
  },
]


const ActiveGigsScreen = ({navigation}) => {


  return (

    <View>

      <SectionList
        sections = {data}
        keyExtractor = {(item, index) => item + index}
        renderItem = {({item}) => ( // Under this is the frontend code for each of the individual gigs.
            <View>

                <Text>Leave between: {item.start_time}</Text>
                <Text>Arrival between: {item.arrival_time}</Text>
                <Text>{item.car_model}</Text>
                <Text>{item.pickup_address}</Text>
                <Text>{item.destination_address}</Text>
                <Text>Estimated drive time: {item.est_time} hours</Text>
                <Text>Additional information: {item.additional_info}</Text>
                <Text>Reward: {item.reward}</Text>

            </View>
        )}

        renderSectionHeader={({section: {title}}) => ( //This renders the title of the list section
            <Text>{title}</Text>
        )}
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
    </View>

  )
}

export default ActiveGigsScreen