import React from 'react'
import styled from 'styled-components'
import { Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { DoubleChevronLeft } from '../components/Icons'
import CueOption from '../components/CueOption'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const CuesHome = ( props ) => {
    console.log('width: ', screenWidth)
    console.log('height: ', screenHeight)

    const navigation = props.navigation

    return (
        <Container>
            <BackButtonContainer>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <DoubleChevronLeft />
                    <BackButtonText>
                        Back
                    </BackButtonText>
                </TouchableOpacity>
            </BackButtonContainer>
            <TitleBar>
                <Title>
                    What are you struggling with?
                </Title>
            </TitleBar>
            <ScrollView>
                <CueOption 
                    cue={'Avoidance & Procrastination'}
                    navigation={navigation}
                    to={'RoDIntro'}
                />
                <CueOption 
                    cue={'Anger & Resentment'}
                    navigation={navigation}
                    to={'ALIntro'}
                />
                <CueOption 
                    cue={'Shyness & Insecurity'}
                    navigation={navigation}
                    to={'IAIntro'}
                />
                <CueOption 
                    cue={'Worry & Negative Thinking'}
                    navigation={navigation}
                    to={'GFIntro'}
                />
                <CueOption 
                    cue={'Lack of Urgency'}
                    navigation={navigation}
                    to={'JeopardyIntro'}
                />
            </ScrollView>
        </Container>
    )
}

export default CuesHome


const Title = styled.Text`
    font-size: 20px;
    font-family: Poppins-Bold
`

const titleBarWidth = (339/375)*screenWidth
const titleBarFromLeft = (screenWidth-titleBarWidth)/2

const TitleBar = styled.View`
    background-color: #ffea7c;
    width: ${titleBarWidth}px;
    margin-top: 70px;
    left: ${titleBarFromLeft}px;
    justify-content: center;
    align-items: center
`
//width: 100%
//padding-left: 46.2px


const BackButtonText = styled.Text`
    font-size: 19px;
    font-family: Poppins-Regular;
    padding-left: 33px;
    position: absolute;
    bottom: -5px;
`

const BackButtonContainer = styled.View`
    background: #ffea7c;
    width: ${screenWidth/4.21}px;
    height: ${screenHeight/24.6}px;
    left: ${screenWidth/26.79}px;
    top: ${screenHeight/17.28}px;
    justify-content: center;
`

const Container = styled.View`
    flex: 1;
    background-color: #ffea7c;
`

const Text = styled.Text``