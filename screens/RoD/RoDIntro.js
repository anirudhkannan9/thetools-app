import React from 'react'
import styled from 'styled-components'
import { Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import BackButton from '../../components/BackButton'
import { SmallEncircledOne, SmallEncircledTwo, SmallEncircledThree } from '../../components/Icons'
import UseThisToolButton from '../../components/UseThisToolButton'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const roTop = (195/812)*screenHeight
const roHeight = 0.5*(132/812)*screenHeight

const RoDIntro = (props) => {
    const navigation = props.navigation
    console.log('in RoD, height: ', screenHeight)
    console.log('in RoD, roTop: ', roTop)
    console.log('in RoD, roHeight: ', roHeight)

    return (
        <Container>
            <BackButton navigation={navigation} />
            <MottoContainer>
                <MottoText>
                        Conquer fear and be limitless with...
                </MottoText>
            </MottoContainer>
            <TheContainer>
                <TheText>
                    the
                </TheText>
            </TheContainer>
            <RoDContainer>
                <RoDText>
                    Reversal of Desire
                </RoDText>
            </RoDContainer>
            <Step1Container>
                <SmallEncircledOne />
                <Step1Text>
                    "Bring it on!"

                </Step1Text>
            </Step1Container>
            <Step2Container>
                <SmallEncircledTwo/>
                <Step2Text>
                    "I love fear!"

                </Step2Text>

            </Step2Container>
            <Step3Container>
                <SmallEncircledThree />
                <Step3Text>
                    "Fear* sets me free..."

                </Step3Text>

            </Step3Container>
            <AsteriskContainer>
                <AsteriskText>
                    * also works with 'pain' instead of 'fear'
                </AsteriskText>

            </AsteriskContainer>
            <UseThisToolButton 
                navigation={navigation}
                target={"RoD1"}
            />
        </Container>
    )
}

export default RoDIntro

const leftAlignMostElements = screenWidth*(46/375);
const iPhone11ProAspectRatio = 19.5/9

const AsteriskText = styled.Text`
    font-family: Poppins-Medium;
    font-size: ${(14/812)*screenHeight}px;
`

const AsteriskContainer = styled.View`
    background-color: #ffea7c;
    width: ${(273/375)*screenWidth}px;
    height: ${(21/812)*screenHeight}px;
    left: ${(70/375)*screenWidth}px;
    top: ${(290/812)*screenHeight}px;
`
const Step3Text = styled.Text`
    font-family: Poppins-SemiBoldItalic;
    font-size: ${(24/812)*screenHeight}px;
    padding-left: 15px;
`

const Step3Container = styled.View`
    background-color: #ffea7c;
    width: ${(320/375)*screenWidth}px;
    height: ${(42/812)*screenHeight}px;
    left: ${leftAlignMostElements}px;
    top: ${(280/812)*screenHeight}px;
    align-items: center;
    flex-direction: row;
`

const Step2Text = styled.Text`
    font-family: Poppins-SemiBoldItalic;
    font-size: ${(24/812)*screenHeight}px;
    padding-left: 15px;
`

const Step2Container = styled.View`
    background-color: #ffea7c;
    width: ${(240/375)*screenWidth}px;
    height: ${(42/812)*screenHeight}px;
    left: ${leftAlignMostElements}px;
    top: ${(220/812)*screenHeight}px;
    align-items: center;
    flex-direction: row;;
`

const Step1Text = styled.Text`
    font-family: Poppins-SemiBoldItalic;
    font-size: ${(24/812)*screenHeight}px;
    padding-left: 15px
`

const Step1Container = styled.View`
    background-color: #ffea7c;
    width: ${(240/375)*screenWidth}px;
    height: ${(42/812)*screenHeight}px;
    left: ${leftAlignMostElements}px;
    top: ${(160/812)*screenHeight}px;
    align-items: center;
    flex-direction: row;
`

const RoDText = styled.Text`
    font-family: Poppins-ExtraBold;
    font-size: ${(48/812)*screenHeight}px;
`

const RoDContainer = styled.View`
    background-color: #ffea7c;
    width: ${screenWidth*(286/375)}px;
    height: ${(132/812)*screenHeight}px;
    left: ${leftAlignMostElements}px;
    top: ${(128/812)*screenHeight}px;
    flex: 0.26
`

const TheText = styled.Text`
    font-family: Poppins-Bold;
    font-size: ${(24/812)*screenHeight}px;
`

const TheContainer = styled.View`
    background-color: #ffea7c;
    width: ${screenWidth/(375/67)}px;
    height: ${screenHeight/(812/27)}px;
    left: ${leftAlignMostElements}px;
    top: ${0.155*screenHeight}px;
    overflow: visible;
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
    justify-content: center;
    align-items: center
`

const Container = styled.View`
    background-color: #ffea7c;
    flex: 1;
`

const Text = styled.Text``

