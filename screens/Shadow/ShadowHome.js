import React from 'react'
import styled from 'styled-components'
import { Dimensions, TouchableOpacity } from 'react-native'
import BackButton from '../../components/BackButton'
import { LargeEncircledMask, LargeEncircledQuestionMark, LargeEncircledEye } from '../../components/Icons'


const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const ShadowHome = ({ navigation }) => {
    return (
        <Container>
            <BackButton navigation = { navigation } />
            <TheShadowContainer>
                <TheShadowText>
                    The Shadow
                </TheShadowText>
            </TheShadowContainer>
            <LargeEncircledMaskContainer>
                <LargeEncircledMask />
            </LargeEncircledMaskContainer>
            <TouchableOpacity
                onPress = { () => navigation.navigate('ShadowDefinition') }
                style = { touchableWhatStyles }
            >
                <LargeEncircledQuestionMark />
                <WhatIsMyShadowText>
                    What is my "Shadow"?
                </WhatIsMyShadowText>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress = { () => navigation.navigate('SeeShadow1') }
                style = { touchableHelpStyles }
            >
                <LargeEncircledEye />
                <HelpMeSeeMyShadowText>
                    Help me see my Shadow
                </HelpMeSeeMyShadowText>


            </TouchableOpacity>
        </Container>
    )
}

export default ShadowHome

const HelpMeSeeMyShadowText = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 19px;
    text-decoration: underline;
    left: 13px;
`

const touchableHelpStyles = {
    backgroundColor: '#ffea7c',
    width: 315,
    position: 'absolute',
    left: (screenWidth-303)/2,
    top: (519/812)*screenHeight,
    flexDirection: 'row',
    alignItems: 'center'
}

const WhatIsMyShadowText = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 19px;
    text-decoration: underline;
    left: 13px;
`

const touchableWhatStyles = { 
    backgroundColor: '#ffea7c',
    width: 303,
    position: 'absolute',
    left: (screenWidth-303)/2,
    top: (391/812)*screenHeight,
    flexDirection: 'row',
    alignItems: 'center',
}

const LargeEncircledMaskContainer = styled.View`
    background-color: #ffea7c;
    width: 65px;
    height: 65px;
    position: absolute;
    top: ${(265/812)*screenHeight}px;
    left: ${(screenWidth-65)/2}px;
`

const TheShadowText = styled.Text`
    font-family: 'Poppins-ExtraBoldItalic';
    font-size: ${(48/812)*screenHeight}px;
`

const shadowContainerWidth = (243/375)*screenWidth
const shadowContainerFromLeft = (screenWidth-shadowContainerWidth)/2

const TheShadowContainer = styled.View`
    background-color: #ffea7c;
    width: ${shadowContainerWidth}px;
    height: ${(143/812)*screenHeight}px;
    position: absolute;
    left: ${shadowContainerFromLeft}px;
    top: ${(105/812)*screenHeight}px;
    flex: 0.26;
    align-items: center;
`

const Container = styled.View`
    background-color: #ffea7c;
    flex: 1;
`


