import React from 'react'
import styled from 'styled-components'
import { View, Dimensions, Platform, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DoubleChevronRight } from '../components/Icons'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const HomeScreen = ({ navigation }) => {
    

    if (Platform.OS === 'ios') {
        console.log('we are in an iPhone')
    } else {
        console.log('we are in an Android')
    }
    return (
        <HomeScreenView>
            <TitleOne>
                The 
            </TitleOne>
            <TitleTwo>
                Tools
            </TitleTwo>
            <ButtonContainer>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Cues")}
                >
                <DoubleChevronRight style={{position: "absolute", left: 175, top: screenHeight/13.533/11 }}/>
                <ButtonText>
                    Use The Tools
                </ButtonText>
                </TouchableOpacity>
            </ButtonContainer>
        </HomeScreenView>
    )

}

export default HomeScreen

const HomeScreenView = styled.View`
    flex: 1;
    background-color: #ffea7c;
`

const ButtonText = styled.Text`
    font-size: 24px;
    font-family: Poppins-SemiBold;
    padding-right: 20px
`

const ButtonContainer = styled.View`
    background: #ffea7c;
    width: ${screenWidth/1.6304}px;
    height: ${screenHeight/13.53333}px;
    left: ${screenWidth/5.137}px;
    top: ${screenHeight/1.56153}px;
    border-radius: 50px;
    border: 1.25px solid black;
    justify-content: center;
    align-items: center;
    z-index: 1
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

