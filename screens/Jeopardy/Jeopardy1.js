import React from 'react'
import styled from 'styled-components'
import { Dimensions } from 'react-native'
import BackButton from '../../components/BackButton'
import { LargeEncircledOne } from '../../components/Icons'
import NextButton from '../../components/NextButton'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const Jeopardy1 = (props) => {
    const navigation = props.navigation

    return (
        <Container>
            <BackButton navigation={navigation} />
            <LargeEncircledOneContainer>
                <LargeEncircledOne />
            </LargeEncircledOneContainer>
            <InstructionContainer>
                <InstructionText>
                    See yourself lying on your deathbed, decades from now. 
                    This older self is out of time, so they know 
                    how <InstructionText style={{fontFamily: 'Poppins-BoldItalic'}}>
                            crucial 
                        </InstructionText> the present moment is.
                </InstructionText>
            </InstructionContainer>
            <NextButton 
                navigation={navigation}
                target={"Jeopardy2"} 
            />
        </Container>
    )
}

export default Jeopardy1

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

