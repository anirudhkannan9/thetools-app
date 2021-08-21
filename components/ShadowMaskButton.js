import React from 'react'
import styled from 'styled-components'
import { Dimensions, TouchableOpacity } from 'react-native'
import { LargeEncircledMask } from './Icons'

const { width: screenWidth, height: screenHeight} = Dimensions.get('window')


const RedoButton = ( { navigation, target } ) => {
    return (
    <TouchableOpacity 
        onPress = { () => navigation.navigate(target)}
        style={ touchableStyles }
        >
        <LargeEncircledMask />
    </TouchableOpacity>
    )
}

export default RedoButton

const touchableStyles = {
    backgroundColor: "#ffea7c",
    width: 65,
    height: 65,
    paddingLeft: 60,
    paddingRight: 60
}
