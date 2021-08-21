import React from 'react'
import styled from 'styled-components'
import { Dimensions, TouchableOpacity } from 'react-native'
import BackButton from '../../components/BackButton'
import {  LargeEncircledQuestionMark } from '../../components/Icons'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')


const ShadowDefinition = ({ navigation }) => {
    return (
        <Container>
            <BackButton navigation = { navigation } />
            <LargeEncircledQuestionMarkContainer>
                <LargeEncircledQuestionMark />
            </LargeEncircledQuestionMarkContainer>
            <TitleContainer>
                <TitleText>
                    What is my "Shadow"?
                </TitleText>
            </TitleContainer>
            <LeftBar />
            <DefinitionContainer>
                <DefinitionText>
                    The Shadow 
                    is <DefinitionText style={{ fontFamily: 'Poppins-Italic'}}>
                            "the sum total of the weakest, most flawed, inferior, even disgusting parts of yourself...
                        </DefinitionText> 
                        <DefinitionText style={{ fontFamily: 'Poppins-SemiBoldItalic'}}>
                            It's everything you don't want to be, but fear that you are."
                        </DefinitionText>
                </DefinitionText>
            </DefinitionContainer>
            <RightBar />
            <Attribution1Container>
                <Attribution1Text>
                    - Barry Michels
                </Attribution1Text>

            </Attribution1Container>
            <Attribution2Container>
                <Attribution2Text>
                    cf. C. G. Jung
                </Attribution2Text>

            </Attribution2Container>
            
        </Container>
    )
}

export default ShadowDefinition

const Container = styled.View`
    background-color: #ffea7c;
    flex: 1;
`

const LargeEncircledQuestionMarkContainer = styled.View`
    background-color: #ffea7c;
    width: 66px;
    height: 66px;
    position: absolute;
    top: ${(65/812)*screenHeight}px;
    left: ${(screenWidth-66)/2}px;

`

const titleContainerWidth = (279/375)*screenWidth
const titleContainerFromleft = (screenWidth-titleContainerWidth)/2
const titleContainerFromTop = ((170/812)*screenHeight)
const titleContainerHeight = ((27/812)*screenHeight)

const TitleContainer = styled.View`
    background-color: #ffea7c;
    width: ${titleContainerWidth}px;
    /* height: ${screenHeight/(812/27)}px; */
    height: ${titleContainerHeight}px;
    position: absolute;
    left: ${titleContainerFromleft}px;
    top: ${titleContainerFromTop}px;
    justify-content: center;
    align-items: center
`

const TitleText = styled.Text`
    font-family: Poppins-SemiBold;
    font-size: ${(23/812)*screenHeight}px;
`

const definitionContainerWidth = (227/375)*screenWidth
const definitionContainerFromLeft = (screenWidth-definitionContainerWidth)/2
const definitionContainerFromTop = ((170/812)+(99/812))*screenHeight
const definitionContainerHeight = (270/812)*screenHeight

const DefinitionContainer = styled.View`
    background-color: #ffea7c;
    width: ${definitionContainerWidth}px;
    height: ${definitionContainerHeight}px;
    position: absolute;
    top: ${definitionContainerFromTop}px;
    left: ${definitionContainerFromLeft}px;
    align-items: center;
`

const DefinitionText = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: ${(20/812)*screenHeight}px;
`

const attribution1ContainerWidth = (140/375)*screenWidth
const attribution1ContainerHeight = (27/812)*screenHeight
const attribution1ContainerFromTop = 
    definitionContainerFromTop+attribution1ContainerHeight+titleContainerFromTop+titleContainerHeight+(0.17*definitionContainerHeight)
const attribution1ContainerFromLeft = (screenWidth/2)-(definitionContainerWidth/6)

const Attribution1Container = styled.View`
    background-color: #ffea7c;
    /* border: 1px solid black; */
    width: ${attribution1ContainerWidth}px;
    height: ${attribution1ContainerHeight}px;
    position: absolute;
    top: ${attribution1ContainerFromTop}px;
    left: ${attribution1ContainerFromLeft}px;
`

const Attribution1Text = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: ${(18/812)*screenHeight}px;
`

const attribution2ContainerWidth = (90/375)*screenWidth
const attribution2ContainerHeight = (20/812)*screenHeight
const attribution2ContainerFromTop = attribution1ContainerFromTop+attribution1ContainerHeight

const Attribution2Container = styled.View`
    background-color: #ffea7c;
    /* border: 1px solid black; */
    width: ${attribution2ContainerWidth}px;
    height: ${attribution2ContainerHeight}px;
    position: absolute;
    top: ${attribution2ContainerFromTop}px;
    left: ${attribution1ContainerFromLeft*1.095}px;
`

const Attribution2Text = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: ${(13/812)*screenHeight}px;
`

const LeftBar = styled.View`
    height: ${(310/812)*screenHeight}px;
    width: 2px;
    background-color: black;
    position: absolute;
    left: ${(35/375)*screenWidth}px;
    top: ${definitionContainerFromTop-((13/812)*screenHeight)}px;
`

const RightBar = styled.View`
    height: ${(310/812)*screenHeight}px;
    width: 2px;
    background-color: black;
    position: absolute;
    left: ${(340/375)*screenWidth}px;
    top: ${definitionContainerFromTop-((13/812)*screenHeight)}px;
`






