import * as React from 'react';
import { StyleSheet } from 'react-native';

{/*
In this file you can create multiple css styles to be used troughout the app
as with other things, we use export here to be able to import the STYLES object in other files
Basically all styling should be done trough this file to keep the main app cole as clean as possible
*/}

{/*Under here is the STYLES object, every style should be contained in it*/}
{/*
The example style should remain to give people an idea of how it works
In the exaple, you can put css styling, the syntax is a bit different, for correct usage check react native docs
To use the styles, give the object in the app code the style attribute with STYLES.x where x is the spesific style in this file you want
*/}

export const STYLES = StyleSheet.create({
    example: {
        backgroundColor: 'black', 
    },
})