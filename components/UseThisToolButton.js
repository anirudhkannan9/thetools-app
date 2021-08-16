import React from 'react'
import styled from 'styled-components'
import { Dimensions, TouchableOpacity } from 'react-native'
import { DoubleChevronRight } from './Icons'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const UseThisToolButton = (props) => {
    const navigation = props.navigation
    const target = props.target

    return (
        <UseThisToolButtonContainer>
            <TouchableOpacity onPress={() => navigation.navigate(target)}>
                <UseThisToolText>
                    Use This Tool
                </UseThisToolText>
                <DoubleChevronRight style={{ position: "absolute", right: '-25%' }}/>
            </TouchableOpacity>
        </UseThisToolButtonContainer>
    )
}

export default UseThisToolButton

const UseThisToolText = styled.Text`
    font-family: Poppins-SemiBold;
    font-size: 20px;
`

const UseThisToolButtonContainer = styled.View`
    background: #ffea7c;
    width: 300px;
    height: 50px;
    position: absolute;
    left: ${(screenWidth-300)/2}px;
    bottom: ${(35/812)*screenHeight}px;
    border: 1px black;
    border-radius: 150px;
    justify-content: center;
    align-items: center

`

