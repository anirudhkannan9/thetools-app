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
            {/* <WhatIsMyShadowContainer>
                <LargeEncircledQuestionMark />
                <TouchableOpacity
                    onPress = { () => navigation.navigate("ShadowDefinition") }
                    style={ touchableWhatStyles }
                >
                    <WhatIsMyShadowText>
                        What is my "Shadow"?
                    </WhatIsMyShadowText>
                </TouchableOpacity>
            </WhatIsMyShadowContainer> */}
            {/* <HelpMeSeeMyShadowContainer>
                <LargeEncircledEye />
                <TouchableOpacity 
                    onPress = { () => navigation.navigate("SeeShadow1") }
                    style = { touchableHelpStyles }
                >
                    <HelpMeSeeMyShadowText>
                        Help me see my Shadow
                    </HelpMeSeeMyShadowText>

                </TouchableOpacity>
            </HelpMeSeeMyShadowContainer> */}




        </Container>
    )
}

export default ShadowHome

// const HelpMeSeeMyShadowText = styled.Text`
//     font-family: 'Poppins-Bold';
//     font-size: 19px;
//     text-decoration: underline;
// `

// const touchableHelpStyles = {
//     backgroundColor: '#ffea7c',
//     width: 240,
//     height: 60,
//     left: 14,
//     justifyContent: 'center'
// }

// const HelpMeSeeMyShadowContainer = styled.View`
//     background-color: #ffea7c;
//     width: 315px;
//     height: 65px;
//     position: absolute;
//     left: ${(screenWidth-303)/2}px;
//     top: ${(519/812)*screenHeight}px;
//     flex-direction: row;
//     align-items: center
// `

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

/* 
const WhatIsMyShadowText = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 19px;
    text-decoration: underline;
`

const touchableWhatStyles = {
    backgroundColor: 'green',
    width: 220,
    height: 60,
    left: 15,
    justifyContent: 'center',

} */

// const whatIsMyShadowContainerWidth = (303/375)*screenWidth
// const whatIsMyShadowContainerFromLeft = (screenWidth-whatIsMyShadowContainerWidth)/2

const WhatIsMyShadowContainer = styled.View`
    background-color: white;
    width: 303px;
    height: 65px;
    position: absolute;
    left: ${(screenWidth-303)/2}px;
    top: ${(391/812)*screenHeight}px;
    flex-direction: row;
    align-items: center
`

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


