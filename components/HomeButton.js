import React from 'react'
import styled from 'styled-components'
import { Dimensions, TouchableOpacity } from 'react-native'
import { EncircledHome } from './Icons'

const { width: screenWidth, height: screenHeight} = Dimensions.get('window')


const HomeButton = ( { navigation, target } ) => {
    return (
    <TouchableOpacity 
        onPress = { () => navigation.navigate(target)}
        style={ touchableStyles }
        >
        <EncircledHome />
    </TouchableOpacity>
    )
}

export default HomeButton

const touchableStyles = {
    backgroundColor: "#ffea7c",
    width: 65,
    height: 65,
    left: 75,
}
