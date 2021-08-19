import React from 'react'
import styled from 'styled-components'
import { Dimensions } from 'react-native'
import BackButton from '../../components/BackButton'
import { LargeEncircledThree } from '../../components/Icons'
import RedoButton from '../../components/RedoButton'
import HomeButton from '../../components/HomeButton'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const IA3 = ({ navigation }) => {
    return (
        <Container>
            <BackButton navigation={ navigation } />
            <LargeEncircledThreeContainer>
                <LargeEncircledThree />
            </LargeEncircledThreeContainer>
            <InstructionContainer>
                <InstructionText>
                    Together, you and your Shadow forcefully turn toward the audience and silently command them
                    to <InstructionText style={{fontFamily: 'Poppins-BoldItalic'}}>"LISTEN!"</InstructionText> Feel
                    the authority that comes when you and your Shadow speak as one.
                </InstructionText>
            </InstructionContainer>
            <RedoAndHomeButtonsContainer> 
                <RedoButton
                    navigation = { navigation }
                    target = { "IAIntro" }
                />
                <HomeButton 
                    navigation = { navigation }
                    target = { "CuesHome" }
                />
            </RedoAndHomeButtonsContainer> 
        </Container>
    )
}

export default IA3

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



