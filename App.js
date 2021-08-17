import React, { useState } from 'react';
import { Text, Platform } from 'react-native';
import styled from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import CuesHome from './screens/CuesHome'
import RoDIntro from './screens/RoD/RoDIntro'
import RoD1 from './screens/RoD/RoD1'
import ALIntro from './screens/AL/ALIntro'
import AL1 from './screens/AL/AL1'
import IAIntro from './screens/IA/IAIntro'
import IA1 from './screens/IA/IA1'
import GFIntro from './screens/GF/GFIntro'
import GF1 from './screens/GF/GF1'
import JeopardyIntro from './screens/Jeopardy/JeopardyIntro'


//fetch the fonts
const fetchFont = () => {
  return Font.loadAsync({
    'Poppins-Bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-SemiBoldItalic': require('./assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins/Poppins-ExtraBold.ttf')
  })
}

const Stack = createNativeStackNavigator()

const App = () => {
  const [ fontLoaded, setFontLoaded ] = useState(false)

  if (Platform.OS === 'ios') {
    console.log('in App.js, we are in an iPhone')
  } else {
    console.log('in App.js, we are in an Android')
  }

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
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
  
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CuesHome" component={CuesHome}/>
          <Stack.Screen name="RoDIntro" component={RoDIntro} />
          <Stack.Screen name="RoD1" component={RoD1} />
          <Stack.Screen name="ALIntro" component={ALIntro} />
          <Stack.Screen name="AL1" component={AL1} />
          <Stack.Screen name="IAIntro" component={IAIntro} />
          <Stack.Screen name="IA1" component={IA1} />
          <Stack.Screen name="GFIntro" component={GFIntro} />
          <Stack.Screen name="GF1" component={GF1} />
          <Stack.Screen name="JeopardyIntro" component={JeopardyIntro} />
  
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App

const Container = styled.View`
  flex: 1;
  background-color: #ffea7c;
`