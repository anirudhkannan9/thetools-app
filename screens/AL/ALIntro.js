import React from 'react'
import styled from 'styled-components'
import { Dimensions } from 'react-native'
import BackButton from '../../components/BackButton'
import { SmallEncircledOne, SmallEncircledTwo, SmallEncircledThree } from '../../components/Icons'
import UseThisToolButton from '../../components/UseThisToolButton'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const ALIntro = (props) => {
    const navigation = props.navigation 

    return (
        <Container>
            <BackButton navigation={navigation} />
            <MottoContainer>
                <MottoText>
                    Escape the Maze of endless resentment with...
                </MottoText>
            </MottoContainer>
            <ALContainer>
                <ALText>
                    Active Love
                </ALText>
            </ALContainer>
            <Step1Container>
                <SmallEncircledOne />
                <StepText>
                    Concentration
                </StepText>
            </Step1Container>
            <Step2Container>
                <SmallEncircledTwo />
                <StepText>
                    Transmission
                </StepText>

            </Step2Container>
            <Step3Container>
                <SmallEncircledThree />
                <StepText>
                    Penetration
                </StepText>
            </Step3Container>
            <UseThisToolButton 
                navigation={navigation}
                target={"AL1"}
                prompt={"Next"}
            />

        </Container>
    )
}

export default ALIntro

const leftAlignMostElements = screenWidth*(46/375);

const Step3Container = styled.View`
    background-color: #ffea7c;
    width: ${(240/375)*screenWidth}px;
    height: ${(42/812)*screenHeight}px;
    left: ${leftAlignMostElements}px;
    top: ${(305/812)*screenHeight}px;
    align-items: center;
    flex-direction: row;
`

const Step2Container = styled.View`
    background-color: #ffea7c;
    width: ${(240/375)*screenWidth}px;
    height: ${(42/812)*screenHeight}px;
    left: ${leftAlignMostElements}px;
    top: ${(245/812)*screenHeight}px;
    align-items: center;
    flex-direction: row;;
`

const StepText = styled.Text`
    font-family: Poppins-SemiBoldItalic;
    font-size: ${(24/812)*screenHeight}px;
    padding-left: 15px
`

const Step1Container = styled.View`
    background-color: #ffea7c;
    width: ${(240/375)*screenWidth}px;
    height: ${(42/812)*screenHeight}px;
    left: ${leftAlignMostElements}px;
    top: ${(185/812)*screenHeight}px;
    align-items: center;
    flex-direction: row;
`

const ALText = styled.Text`
    font-family: Poppins-ExtraBold;
    font-size: ${(48/812)*screenHeight}px;
`

const aLWidth = (286/375*screenWidth)
const aLFromLeft = (screenWidth-aLWidth)/2

const ALContainer = styled.View`
    background-color: #ffea7c;
    width: ${aLWidth}px;
    height: ${(61/812)*screenHeight}px;
    left: ${aLFromLeft}px;
    top: ${(137/812)*screenHeight}px;
    align-items: center;
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
    flex: 1;
    background-color: #ffea7c;
`


