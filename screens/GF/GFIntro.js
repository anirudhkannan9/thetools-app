import React from 'react'
import styled from 'styled-components'
import { Dimensions } from 'react-native'
import BackButton from '../../components/BackButton'
import { SmallEncircledOne, SmallEncircledThree, SmallEncircledTwo } from '../../components/Icons'
import UseThisToolButton from '../../components/UseThisToolButton'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const GFIntro = (props) => {
    const navigation = props.navigation

    return (
        <Container>
            <BackButton navigation={navigation} />
            <MottoContainer>
                <MottoText>
                    Transcend negative thinking with...
                </MottoText>
            </MottoContainer>
            <GFContainer>
                <GFText>
                    Grateful Flow
                </GFText>
            </GFContainer>
            <Step1Container>
                <SmallEncircledOne />
                <Step1Text>
                    Gratefulness
                </Step1Text>
            </Step1Container>
            <Step2Container>
                <SmallEncircledTwo />
                <Step2Text>
                    Flow
                </Step2Text>
            </Step2Container>
            <Step3Container>
                <SmallEncircledThree />
                <Step3Text>
                    The Source
                </Step3Text>
            </Step3Container>
            <UseThisToolButton 
                navigation={navigation}
                target={"GF1"}
            />
            
        </Container>
    )
}

export default GFIntro

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
    top: ${(253.5/812)*screenHeight}px;
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
    top: ${(183.5/812)*screenHeight}px;
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
    top: ${(118.5/812)*screenHeight}px;
    align-items: center;
    flex-direction: row;
`

const GFText = styled.Text`
    font-family: Poppins-ExtraBold;
    font-size: ${(48/812)*screenHeight}px;
`

const GFContainer = styled.View`
    background-color: #ffea7c;
    width: ${screenWidth*(286/375)}px;
    height: ${(132/812)*screenHeight}px;
    left: ${leftAlignMostElements}px;
    top: ${(115/812)*screenHeight}px;
    flex: 0.24
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
`

const Container = styled.View`
    background-color: #ffea7c;
    flex: 1;
`

