import React from 'react'
import styled from 'styled-components'
import { Dimensions } from 'react-native'
import BackButton from '../../components/BackButton'
import { LargeEncircledTwo } from '../../components/Icons'
import NextButton from '../../components/NextButton'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const GF2 = ({ navigation }) => {
    return (
        <Container>
            <BackButton navigation = { navigation } />
            <LargeEncircledTwoContainer>
                <LargeEncircledTwo />
            </LargeEncircledTwoContainer>
            <InstructionContainer>
                <InstructionText>
                    After about 30 seconds, stop thinking and focus on the  
                    physical <InstructionText style={{ fontFamily: 'Poppins-BoldItalic'}}>sensation</InstructionText> of 
                    gratefulness. Feel it coming directly from your heart. This energy you feel is called
                    the <InstructionText style={{ fontFamily: 'Poppins-BoldItalic'}}>Grateful Flow</InstructionText>.
                </InstructionText> 
            </InstructionContainer>
            <NextButton 
                navigation={ navigation }
                target={ "GF3" }
            />
        </Container>
    )
}

export default GF2

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


