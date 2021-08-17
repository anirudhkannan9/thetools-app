import React from 'react'
import styled from 'styled-components'
import { Dimensions, TouchableOpacity } from 'react-native'
import { DoubleChevronRight } from './Icons'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const UseTheToolsButton = (props) => {
    const navigation = props.navigation

    return (
            <TouchableOpacity 
                onPress={() => navigation.navigate("CuesHome")}
                style={touchableStyles}
            >
                <Text>
                    Use The Tools
                </Text>
                <DoubleChevronRight 
                    style={doubleChevronRightStyles}
                />
 
            </TouchableOpacity>
    )
}

export default UseTheToolsButton

const doubleChevronRightStyles = {
    left: 85,
    top: 3
}

const Text = styled.Text`
    font-family: Poppins-SemiBold;
    font-size: 24px;
    left: 63px
`

const touchableStyles = {
    backgroundColor: "#ffea7c",
    width: 300,
    height: 65,
    left: (screenWidth-300)/2,
    top: (screenHeight-0.45*screenHeight),
    borderWidth: 1,
    borderRadius: 50,
    alignItems: "center",
    flexDirection: "row",
}

const Container = styled.View`
    background-color: white;
    width: 300px;
    height: 60px;
`
//     left: ${(screenWidth-300)/2}px;
//     top: 60%
// `