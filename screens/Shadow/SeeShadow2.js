import React from 'react'
import styled from 'styled-components'
import { Dimensions } from 'react-native'
import BackButton from '../../components/BackButton'
import { LargeEncircledTwo } from '../../components/Icons'
import NextButton from '../../components/NextButton'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const SeeShadow2 = ({ navigation }) => {
    return (
        <Container>
            <BackButton navigation = { navigation } />
            <LargeEncircledTwoContainer>
                <LargeEncircledTwo />
            </LargeEncircledTwoContainer>
            <InstructionContainer>
                <InstructionText>
                    Imagine that you are physically and emotionally naked in front of them. 
                    They see all your worst traits - the things you hate about yourself.
                    They judge you viciously. 
                </InstructionText>

            </InstructionContainer>
            <NextButton 
                navigation = { navigation }
                target = { "SeeShadow3" }
            />
        </Container>
    )
}

export default SeeShadow2

const InstructionText = styled.Text`
    font-family: 'Poppins-Italic';
    font-size: ${(22/812)*screenHeight}px;
`
const instructionContainerWidth = screenWidth - (2* (21/375) * screenWidth)
const instructionContainerFromLeft = ( screenWidth - instructionContainerWidth )/2

const InstructionContainer = styled.View`
    background-color: #ffea7c;
    width: ${instructionContainerWidth}px;
    left: ${instructionContainerFromLeft}px;
    top: ${(110/812)*screenHeight}px;
    align-items: center;
`

const LargeEncircledTwoContainer = styled.View`
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


