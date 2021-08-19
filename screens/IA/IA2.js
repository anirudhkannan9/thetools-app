import React from 'react'
import styled from 'styled-components'
import { Dimensions, TouchableOpacity } from 'react-native'
import BackButton from '../../components/BackButton'
import { LargeEncircledTwo } from '../../components/Icons'
import NextButton from '../../components/NextButton'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const IA2 = ({ navigation }) => {
    return (
        <Container>
            <BackButton navigation = { navigation } />
            <LargeEncircledTwoContainer>
                <LargeEncircledTwo />
            </LargeEncircledTwoContainer>
            <InstructionContainer>
                <InstructionText>
                    See your Shadow to the side, facing you. Focus completely on it. Feel an 
                    unbreakable <InstructionText style={{ fontFamily: 'Poppins-BoldItalic'}}>
                                    bond
                                </InstructionText> between
                    the two of you - 
                    you're <InstructionText style={{ fontFamily: 'Poppins-BoldItalic' }}>
                        fearless together
                    </InstructionText> (the audience
                    should stop mattering - or even existing).
                    
                </InstructionText> 
            </InstructionContainer>
            <TouchableOpacity 
                onPress={ () => navigation.navigate("ShadowHome") }
                style={ touchableStyles }
            >
                <WhatIsShadowText>
                    What is my "Shadow"?
                </WhatIsShadowText>

            </TouchableOpacity>
            <NextButton 
                navigation={ navigation }
                target={ "IA3" }
            />
        </Container>
    )
}

export default IA2

const WhatIsShadowText = styled.Text`
    font-family: 'Poppins-Medium';
    font-size: ${(16/812)*screenHeight}px;
    text-decoration: underline;
`

const touchableWidth = (184/375)*screenWidth
const touchableFromLeft = (screenWidth-touchableWidth)/2

const touchableStyles = {
    backgroundColor: "#ffea7c",
    width: touchableWidth,
    height: (24/812)*screenHeight,
    position: "absolute",
    left: touchableFromLeft,
    bottom: (0.12*screenHeight),
    marginBottom: 17,
    alignItems: "center"
}

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

