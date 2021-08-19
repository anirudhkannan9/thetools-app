import React from 'react'
import styled from 'styled-components'

const ShadowDefinition = (props) => {
    return (
        <Container>
            <Text>
                ShadowDefinition
            </Text>
        </Container>
    )
}

export default ShadowDefinition

const Container = styled.View`
    background-color: #ffea7c;
    flex: 1;
    align-items: center;
    justify-content: center;
`

const Text = styled.Text``

