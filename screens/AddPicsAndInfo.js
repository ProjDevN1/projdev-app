import { View, Text, Pressable, TextInput } from 'react-native'
import React from 'react'

const AddPicsAndInfo = () => {
  return (
    <View>
      <Text>Add Pics And Info</Text>

    {/*Upper right question mark*/}
      <Pressable>
        <Text>?</Text>  
      </Pressable>

    {/*Left "text" button*/}
      <Pressable>
        <Text>Text</Text>    
      </Pressable>  

    {/*Right "text" button*/}
      <Pressable> 
        <Text>Text</Text>   
      </Pressable>

    {/*Info text box*/}
      <TextInput placeholder='Info text goes here'></TextInput>

    {/*Back button*/}
      <Pressable>
        <Text>Back</Text>
      </Pressable>
    {/*Next button*/}
      <Pressable>
        <Text>Next</Text>
      </Pressable>
    </View>
  )
}

export default AddPicsAndInfo