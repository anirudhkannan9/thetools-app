import React from 'react'
import styled from 'styled-components'
import { Dimensions, TouchableOpacity } from 'react-native'
import { EncircledRedo } from './Icons'

const { width: screenWidth, height: screenHeight} = Dimensions.get('window')


const RedoButton = ( { navigation, target } ) => {
    return (
    <TouchableOpacity 
        onPress = { () => navigation.navigate(target)}
        style={ touchableStyles }
        >
        <EncircledRedo />
    </TouchableOpacity>
    )
}

export default RedoButton

const touchableStyles = {
    backgroundColor: "#ffea7c",
    width: 65,
    height: 65,
}
