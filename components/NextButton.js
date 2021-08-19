import React from 'react'
import styled from 'styled-components'
import { Dimensions, TouchableOpacity } from 'react-native'
import { DoubleChevronRight } from './Icons'

const { width: screenWidth, height: screenHeight} = Dimensions.get('window')

const NextButton = ({ navigation, target }) => {

    return (
        <TouchableOpacity
            onPress={ () => navigation.navigate(target) }
            style={ touchableStyles }
        >
            <Text>
                Next
            </Text>
            <DoubleChevronRight style={doubleChevronRightStyles}/>
        </TouchableOpacity>
    )

}

export default NextButton

const doubleChevronRightStyles = {
    position: "absolute",
    left: 255,
    top: 9.25
}

const touchableStyles = {
    backgroundColor: "#ffea7c",
    width: 300,
    height: 50,
    left: (screenWidth-300)/2,
    bottom: (0.05*screenHeight),
    borderWidth: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
}

const Text = styled.Text`
    font-family: Poppins-SemiBold;
    font-size: 20px;
`

