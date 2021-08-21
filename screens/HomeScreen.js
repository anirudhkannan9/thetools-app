import React from 'react'
import styled from 'styled-components'
import { Dimensions } from 'react-native'
import UseTheToolsButton from '../components/UseTheToolsButton'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const HomeScreen = ({ navigation }) => {
    return (
        <HomeScreenView>
            <TitleOne>
                The 
            </TitleOne>
            <TitleTwo>
                Tools
            </TitleTwo>
            <UseTheToolsButton navigation={navigation} />
        </HomeScreenView>
    )

}

export default HomeScreen

const HomeScreenView = styled.View`
    flex: 1;
    background-color: #ffea7c;
`

const TitleTwo = styled.Text`
    font-size: 72px;
    font-family: Poppins-Bold;
    left: ${screenWidth/4.19}px;
    top: ${screenHeight/5.9}px;
`

const TitleOne = styled.Text`
    font-size: 30px;
    font-family: Poppins-Bold;
    left: ${screenWidth/4.2}px;
    top: ${screenHeight/5}px;
`

