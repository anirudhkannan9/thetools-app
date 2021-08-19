import React from 'react'
import styled from 'styled-components'
import { Dimensions, TouchableOpacity } from 'react-native'
import { EncircledRedo } from './Icons'
import { EncircledHome } from './Icons'

const { width: screenWidth, height: screenHeight} = Dimensions.get('window')


const RedoAndHomeButtons = ( { navigation, redoTarget, homeTarget } ) => {
    return (
        <Container>
            <RedoContainer>
                <TouchableOpacity 
                    onPress = { () => navigation.navigate(redoTarget)}
                >
                    <EncircledRedo />
                </TouchableOpacity>
            </RedoContainer>

            <HomeContainer>
                <TouchableOpacity
                    onPress={ () => navigation.navigate(homeTarget) }
                >
                    <EncircledHome style={{paddingLeft: 210}}/>
                </TouchableOpacity>
            </HomeContainer>
        </Container>
    )
}

export default RedoAndHomeButtons

const HomeContainer = styled.View`
    flex: 0
`

const RedoContainer = styled.View``

const Container = styled.View`
    background-color: #ffea7c;
    width: 195px;
    height: 60px;
    left: ${0.5*(screenWidth-195)}px;
    top: ${0.53*screenHeight}px;
    flex-direction: row
`

const touchableStyles = {
    backgroundColor: "white",
    width: (180/375)*screenWidth,
    height: 60,
    left: ((screenWidth-60)/4),
    top: (0.55*screenHeight),
    flexDirection: "row",
}
