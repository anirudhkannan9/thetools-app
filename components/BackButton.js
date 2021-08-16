import React from 'react'
import styled from 'styled-components'
import { Dimensions, TouchableOpacity } from 'react-native'
import { DoubleChevronLeft } from './Icons'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const BackButton = (props) => {
    const navigation = props.navigation

    return (
        <BackButtonContainer>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <DoubleChevronLeft />
                <BackButtonText>
                    Back
                </BackButtonText>
            </TouchableOpacity>
        </BackButtonContainer>
    )
}

export default BackButton

const BackButtonText = styled.Text`
    font-size: ${(19/812)*screenHeight}px;
    font-family: Poppins-Regular;
    padding-left: 33px;
    position: absolute;
    bottom: -4.8px;
`

const BackButtonContainer = styled.View`
    background: #ffea7c;
    width: ${screenWidth/4.21}px;
    height: ${screenHeight/24.6}px;
    left: ${screenWidth/26.79}px;
    top: ${screenHeight/17.28}px;
    justify-content: center;
`

