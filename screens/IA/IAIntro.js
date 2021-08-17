import React from 'react'
import styled from 'styled-components'
import { Dimensions } from 'react-native'
import BackButton from '../../components/BackButton'
import { SmallEncircledOne, SmallEncircledThree, SmallEncircledTwo } from '../../components/Icons'
import UseThisToolButton from '../../components/UseThisToolButton'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const IAIntro = (props) => {
    const navigation = props.navigation
    return (
        <Container>
            <BackButton navigation={navigation} />
            <MottoContainer>
                <MottoText>
                    Express yourself, free of inhibition with...
                </MottoText>
            </MottoContainer>
            <IAContainer>
                <IAText>
                    Inner Authority
                </IAText>
            </IAContainer>
            <Step1Container>
                <SmallEncircledOne />
                <Step1Text>
                    See the Audience
                </Step1Text>
            </Step1Container>
            <Step2Container>
                <SmallEncircledTwo/>
                <Step2Text>
                    Embrace Your Shadow
                </Step2Text>
            </Step2Container>
            <Step3Container>
                <SmallEncircledThree />
                <Step3Text>
                    "LISTEN!"
                </Step3Text>
            </Step3Container>
            <UseThisToolButton 
                navigation={navigation}
                target={"IA1"}
            />

        </Container>
    )
}

export default IAIntro

const leftAlignMostElements = screenWidth*(46/375);

const Step3Text = styled.Text`
    font-family: Poppins-SemiBoldItalic;
    font-size: ${(24/812)*screenHeight}px;
    padding-left: 15px;
`

const Step3Container = styled.View`
    background-color: #ffea7c;
    width: ${(275/375)*screenWidth}px;
    height: ${(42/812)*screenHeight}px;
    left: ${leftAlignMostElements}px;
    top: ${(200/812)*screenHeight}px;
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
    width: ${(275/375)*screenWidth}px;
    height: ${(70/812)*screenHeight}px;
    left: ${leftAlignMostElements}px;
    top: ${(160/812)*screenHeight}px;
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
    width: ${(280/375)*screenWidth}px;
    height: ${(42/812)*screenHeight}px;
    left: ${leftAlignMostElements}px;
    top: ${(120/812)*screenHeight}px;
    align-items: center;
    flex-direction: row;
`

const IAText = styled.Text`
    font-family: Poppins-ExtraBold;
    font-size: ${(48/812)*screenHeight}px;
`

const IAContainer = styled.View`
    background-color: #ffea7c;
    width: ${screenWidth*(286/375)}px;
    height: ${(132/812)*screenHeight}px;
    left: ${leftAlignMostElements}px;
    top: ${(100/812)*screenHeight}px;
    flex: 0.25
`

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

