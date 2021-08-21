import React from 'react'
import styled from 'styled-components'
import { Dimensions } from 'react-native'
import BackButton from '../../components/BackButton'
import { LargeEncircledThree } from '../../components/Icons'
import RedoButton from '../../components/RedoButton'
import ShadowMaskButton from '../../components/ShadowMaskButton'
import HomeButton from '../../components/HomeButton'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const SeeShadow3 = ({ navigation }) => {
    return (
        <Container>
            <BackButton navigation={ navigation } />
            <LargeEncircledThreeContainer>
                <LargeEncircledThree />
            </LargeEncircledThreeContainer>
            <InstructionContainer>
                <InstructionText>
                    Switch perspectives; you're now the audience, looking at the embodiment of all your worst traits.
                    The figure you see up on stage is your Shadow.
                </InstructionText>
            </InstructionContainer>
            <ParenthesesContainer>
                <ParenthesesText>
                    (the worse you feel about this figure, the better)
                </ParenthesesText>
            </ParenthesesContainer>
            <RedoAndMaskAndHomeButtonsContainer>
                <RedoButton 
                    navigation = { navigation }
                    target = { "SeeShadow1" }
                />
                <ShadowMaskButton 
                    navigation = { navigation }
                    target = { "ShadowHome" }
                />
                <HomeButton 
                    navigation = { navigation }
                    target = { "CuesHome" }
                />
            </RedoAndMaskAndHomeButtonsContainer>
        </Container>
    )
}

export default SeeShadow3

const Container = styled.View`
    background-color: #ffea7c;
    flex: 1;
`
const LargeEncircledThreeContainer = styled.View`
    background-color: #ffea7c;
    width: 61px;
    height: 66px;
    position: absolute;
    top: ${(83/812)*screenHeight}px;
    left: ${(screenWidth-61)/2}px;
`

const instructionContainerWidth = screenWidth - (2* (21/375) * screenWidth)
const instructionContainerFromLeft = ( screenWidth - instructionContainerWidth )/2
const instructionContainerFromTop = (184/812)*screenHeight
const instructionContainerHeight = (202/812)*screenHeight

const InstructionContainer = styled.View`
    background-color: #ffea7c;
    width: ${instructionContainerWidth}px;
    height: ${instructionContainerHeight}px;
    position: absolute;
    left: ${instructionContainerFromLeft}px;
    top: ${instructionContainerFromTop}px;
    align-items: center;
`

const InstructionText = styled.Text`
    font-family: 'Poppins-Italic';
    font-size: ${(22/812)*screenHeight}px;
`

const ParenthesesContainer = styled.View`
    background-color: #ffea7c;
    width: ${instructionContainerWidth}px;
    height: ${(23/812)*screenHeight}px;
    position: absolute;
    left: ${instructionContainerFromLeft}px;
    top: ${instructionContainerFromTop + (1*instructionContainerHeight)}px;
    align-items: center;
`
const ParenthesesText = styled.Text`
    font-family: 'Poppins-Regular';
    /* font-size:  */
`

const RedoAndMaskAndHomeButtonsContainer = styled.View`
    background-color: #ffea7c;
    width: 315px;
    height: 65px;;
    left: ${(screenWidth-315)/2}px;
    /* top: ${0.53*screenHeight}px; */
    flex-direction: row;
    position: absolute;
    bottom: ${(42/812)*screenHeight}px;
`










