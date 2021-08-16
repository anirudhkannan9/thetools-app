import React from 'react'
import { Dimensions, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const CueOption = (props) => {
    const navigation = props.navigation

    return (
        <Container>
            <TouchableOpacity onPress={() => {navigation.navigate(props.to)}}>
                <Text>
                    {props.cue}
                </Text>
            </TouchableOpacity>
        </Container>

    )
}

export default CueOption

const Text = styled.Text`
    font-size: 20px;
    font-family: Poppins-Medium;
    align-self: center;
    margin-top: 8px
`

const Container = styled.View`
    background-color: #ffea7c;
    width: 310px;
    height: 50px;
    border-radius: 50px;
    border: 1px black;
    margin-top: ${screenHeight/13.4}px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    align-self: center
`
