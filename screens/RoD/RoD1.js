import React from 'react'
import styled from 'styled-components'
import { Dimensions } from 'react-native'
import BackButton from '../../components/BackButton'
import { LargeEncircledOne } from '../../components/Icons'
import NextButton from '../../components/NextButton'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const RoD1 = ({ navigation }) => {
    return (
        <Container>
            <BackButton navigation = { navigation } />
            <LargeEncircledOneContainer>
                <LargeEncircledOne />
            </LargeEncircledOneContainer>
            <InstructionContainer>
                <InstructionText>
                    Separate your fear from the situation causing it. See the fear in front of you as a cloud. Scream silently at the 
                    cloud, <InstructionText style={{ fontFamily: 'Poppins-BoldItalic'}}>"BRING IT ON!"</InstructionText> Feel 
                    an intense desire to move into the cloud; you want the fear because it has great value. 
                </InstructionText>
            </InstructionContainer>
            <NextButton 
                navigation =  { navigation } 
                target = { "RoD2" }
            />

        </Container>
    ) 
}

export default RoD1

const InstructionText = styled.Text`
    font-family: 'Poppins-Italic';
    font-size: ${(22/812)*screenHeight}px;
`

const instructionContainerWidth = screenWidth-(2*(21/375)*screenWidth)
const instructionContainerFromLeft = (screenWidth-instructionContainerWidth)/2

const InstructionContainer = styled.View`
    background-color: #ffea7c;
    width: ${instructionContainerWidth}px;
    left: ${instructionContainerFromLeft}px;
    top: ${(110/812)*screenHeight}px;
`

const LargeEncircledOneContainer = styled.View`
    background-color: #ffea7c;
    width: 61px;
    height: 66px;
    top: ${(65/812)*screenHeight}px;
    left: ${(screenWidth-61)/2}px;

`

const Container = styled.View`
    background-color: #ffea7c;
    flex: 1;
`


