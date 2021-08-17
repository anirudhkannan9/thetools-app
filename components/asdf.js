import React from 'react'
import styled from 'styled-components'
import { Dimensions, TouchableOpacity } from 'react-native'
import { DoubleChevronRight } from './Icons'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const UseThisToolButton = (props) => {
    const navigation = props.navigation
    const target = props.target

    // return (
    //     <Container>
    //         <TouchableOpacity onPress={() => navigation.navigate(target)}>
    //             <UseThisToolText>
    //                 Use This Tool
    //             </UseThisToolText>
    //             <DoubleChevronRight style={{ position: "absolute", right: '-25%' }}/>
    //         </TouchableOpacity>
    //     </Container>
    // )

    return (
        // <Container>
            <TouchableOpacity onPress={() => { navigation.navigate(target) }}>
                <Container>
                <Text>
                    Use This Tool
                </Text>
                </Container>
            </TouchableOpacity>
        // {/* </Container> */}
    )
}

export default UseThisToolButton


const Text = styled.Text`
    font-family: Poppins-SemiBold;
    font-size: 20px;
`

const Container = styled.View`
    background: #ffea7c;
    width: 300px;
    height: 50px;
    position: absolute;
    left: ${(screenWidth-300)/2}px;
    bottom: ${(-400/812)*screenHeight}px;
    border: 1px black;
    border-radius: 150px;
    justify-content: center;
    align-items: center
`

/* const Container = styled.View`
    background-color: #ffea7c;
    width: 310px;
    height: 50px;
    border-radius: 50px;
    border: 1px black;
    margin-top: ${screenHeight/13.4}px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    align-self: center
` */


