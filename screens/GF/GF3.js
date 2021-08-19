import React from 'react'
import styled from 'styled-components'
import { Dimensions } from 'react-native'
import BackButton from '../../components/BackButton'
import { LargeEncircledThree } from '../../components/Icons'
import RedoButton from '../../components/RedoButton'
import HomeButton from '../../components/HomeButton'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const GF3 = ({ navigation }) => {
    return (
        <Container>
            <BackButton navigation={ navigation } />
            <LargeEncircledThreeContainer>
                <LargeEncircledThree />
            </LargeEncircledThreeContainer>
            <InstructionContainer>
                <InstructionText>
                    As this energy emanates from your heart, your chest softens and opens. In this 
                    state, feel yourself approached by an 
                    overwhelming <InstructionText style={{fontFamily: 'Poppins-BoldItalic'}}>presence</InstructionText>, filled
                    with the power of infinite giving. You've made a connection to
                    the <InstructionText style={{fontFamily: 'Poppins-BoldItalic'}}>Source</InstructionText>.
                </InstructionText>
            </InstructionContainer>
            <RedoAndHomeButtonsContainer> 
                <RedoButton
                    navigation = { navigation }
                    target = { "GFIntro" }
                />
                <HomeButton 
                    navigation = { navigation }
                    target = { "CuesHome" }
                />
            </RedoAndHomeButtonsContainer> 
        </Container>
    )
}

export default GF3

const RedoAndHomeButtonsContainer = styled.View`
    background-color: #ffea7c;
    width: 195px;
    height: 65px;;
    left: ${(screenWidth-195)/2}px;
    /* top: ${0.53*screenHeight}px; */
    flex-direction: row;
    position: absolute;
    bottom: ${(42/812)*screenHeight}px;
`

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

const LargeEncircledThreeContainer = styled.View`
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


