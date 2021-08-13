import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

//fetch the font
const fetchFont = () => {
  return Font.loadAsync({
    'Poppins-Bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf')
  })
}

const App = () => {
  const [ fontLoaded, setFontLoaded ] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFont}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.error('ERROR')}
      />
    )
  }

  return (
    <Container>
      <TitleOne>
        The
      </TitleOne>
      <TitleTwo>
        Tools
      </TitleTwo>
    </Container>
  )
}

export default App

const Container = styled.View`
  flex: 1;
  background-color: #ffea7c;
`
const TitleOne = styled.Text`
  font-size: 30px;
  font-family: Poppins-Bold;
  margin-left: 93px;
  margin-top: 163px;
`

const TitleTwo = styled.Text`
  font-size: 72px;
  font-family: Poppins-Bold;
  margin-left: 93px;
  margin-top: -25px
`
