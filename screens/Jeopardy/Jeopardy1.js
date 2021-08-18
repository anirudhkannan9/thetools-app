import React from 'react'
import styled from 'styled-components'
import BackButton from '../../components/BackButton'

const Jeopardy1 = (props) => {
    const navigation = props.navigation

    return (
        <Container>
            <BackButton navigation={navigation} />
            <Text>
                Jeopardy 1
            </Text>
        </Container>
    )
}

export default Jeopardy1

const Container = styled.View`
    background-color: #ffea7c;
    flex: 1;
`

const Text = styled.Text``

