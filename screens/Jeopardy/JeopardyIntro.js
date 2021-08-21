import React from 'react'
import styled from 'styled-components'
import { Dimensions } from 'react-native'
import BackButton from '../../components/BackButton'
import { SmallEncircledOne, SmallEncircledThree, SmallEncircledTwo } from '../../components/Icons'
import UseThisToolButton from '../../components/UseThisToolButton'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const JeopardyIntro = (props) => {
    const navigation = props.navigation
    return (
        <Container>
            <BackButton navigation={navigation} />
            <MottoContainer>
                <MottoText>
                    Kickstart your sense of urgency with...
                </MottoText>
            </MottoContainer>
            <JeopardyContainer>
                <JeopardyText>
                    Jeopardy
                </JeopardyText>
            </JeopardyContainer>
            <Step1Container>
                <SmallEncircledOne />
                <Step1Text>
                    Deathbed
                </Step1Text>
            </Step1Container>
            <Step2Container>
                <SmallEncircledTwo />
                <Step2Text>
                    Fear
                </Step2Text>
            </Step2Container>
            <Step3Container>
                <SmallEncircledThree />
                <Step3Text>
                    Desire
                </Step3Text>
            </Step3Container>
            <UseThisToolButton 
                navigation={navigation}
                target={"Jeopardy1"}
            />
        </Container>
    )
}

export default JeopardyIntro

const leftAlignMostElements = screenWidth*(46/375)

const Step3Text = styled.Text`
    font-family: Poppins-SemiBoldItalic;
    font-size: ${(24/812)*screenHeight}px;
    padding-left: 15px;
`

const Step3Container = styled.View`
    background-color: #ffea7c;
    width: ${(268/375)*screenWidth}px;
    height: ${(42/812)*screenHeight}px;
    left: ${leftAlignMostElements}px;
    top: ${(300/812)*screenHeight}px;
    align-items: center;
    flex-direction: row;
`

const Step2Text = styled.Text`
    font-family: Poppins-SemiBoldItalic;
    font-size: ${(23/812)*screenHeight}px;
    padding-left: 15px;
`

const Step2Container = styled.View`
    background-color: #ffea7c;
    width: ${(268/375)*screenWidth}px;
    height: ${(42/812)*screenHeight}px;
    left: ${leftAlignMostElements}px;
    top: ${(240/812)*screenHeight}px;
    align-items: center;
    flex-direction: row;
`

const Step1Text = styled.Text`
    font-family: Poppins-SemiBoldItalic;
    font-size: ${(23/812)*screenHeight}px;
    padding-left: 15px
`

const Step1Container = styled.View`
    background-color: #ffea7c;
    width: ${(268/375)*screenWidth}px;
    height: ${(42/812)*screenHeight}px;
    left: ${leftAlignMostElements}px;
    top: ${(180/812)*screenHeight}px;
    align-items: center;
    flex-direction: row;
`

const JeopardyText = styled.Text`
    font-family: Poppins-ExtraBold;
    font-size: ${(48/812)*screenHeight}px;
`

const jeopardyWidth = (286/375)*screenWidth

const JeopardyContainer = styled.View`
    background-color: #ffea7c;
    width: ${jeopardyWidth}px;
    height: ${(61/812)*screenHeight}px;
    left: ${(screenWidth-jeopardyWidth)/2}px;
    top: ${(130/812)*screenHeight}px;
    align-items: center;
`
//    left: ${leftAlignMostElements}px;



const MottoText = styled.Text`
    font-family: Poppins-SemiBoldItalic;
    font-size: ${(18/812)*screenHeight}px;
`

const MottoContainer = styled.View`
    background-color: #ffea7c;
    width: ${screenWidth/(375/330)}px;
    height: ${screenHeight/(812/27)}px;
    left: ${screenWidth*(20/375)}px;
    top: ${(90/812)*screenHeight}px;
    align-items: center;
    flex: 0.1
`

const Container = styled.View`
    background-color: #ffea7c;
    flex: 1;
`

const Text = styled.Text``

