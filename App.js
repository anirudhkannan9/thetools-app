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
import RoD2 from './screens/RoD/RoD2'
import RoD3 from './screens/RoD/RoD3'
import ALIntro from './screens/AL/ALIntro'
import AL1 from './screens/AL/AL1'
import AL2 from './screens/AL/AL2'
import AL3 from './screens/AL/AL3'
import IAIntro from './screens/IA/IAIntro'
import IA1 from './screens/IA/IA1'
import IA2 from './screens/IA/IA2'
import IA3 from './screens/IA/IA3'
import GFIntro from './screens/GF/GFIntro'
import GF1 from './screens/GF/GF1'
import GF2 from './screens/GF/GF2'
import GF3 from './screens/GF/GF3'
import JeopardyIntro from './screens/Jeopardy/JeopardyIntro'
import Jeopardy1 from './screens/Jeopardy/Jeopardy1'
import Jeopardy2 from './screens/Jeopardy/Jeopardy2'
import Jeopardy3 from './screens/Jeopardy/Jeopardy3'
import ShadowHome from './screens/Shadow/ShadowHome';
import ShadowDefinition from './screens/Shadow/ShadowDefinition'
import SeeShadow1 from './screens/Shadow/SeeShadow1'
import SeeShadow2 from './screens/Shadow/SeeShadow2'
import SeeShadow3 from './screens/Shadow/SeeShadow3'

//fetch the fonts
const fetchFont = () => {
  return Font.loadAsync({
    'Poppins-Bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-SemiBoldItalic': require('./assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
    'Poppins-MediumItalic': require('./assets/fonts/Poppins/Poppins-MediumItalic.ttf'),
    'Poppins-BoldItalic': require('./assets/fonts/Poppins/Poppins-BoldItalic.ttf'),
    'Poppins-Italic': require('./assets/fonts/Poppins/Poppins-Italic.ttf'),
    'Poppins-ExtraBoldItalic': require('./assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf')
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
          <Stack.Screen name="RoD2" component={RoD2} />
          <Stack.Screen name="RoD3" component={RoD3} />
          <Stack.Screen name="ALIntro" component={ALIntro} />
          <Stack.Screen name="AL1" component={AL1} />
          <Stack.Screen name="AL2" component={AL2} />
          <Stack.Screen name="AL3" component={AL3} />
          <Stack.Screen name="IAIntro" component={IAIntro} />
          <Stack.Screen name="IA1" component={IA1} />
          <Stack.Screen name="IA2" component={IA2} />
          <Stack.Screen name="IA3" component={IA3} />
          <Stack.Screen name="GFIntro" component={GFIntro} />
          <Stack.Screen name="GF1" component={GF1} />
          <Stack.Screen name="GF2" component={GF2} />
          <Stack.Screen name="GF3" component={GF3} />
          <Stack.Screen name="JeopardyIntro" component={JeopardyIntro} />
          <Stack.Screen name="Jeopardy1" component={Jeopardy1} />
          <Stack.Screen name="Jeopardy2" component={Jeopardy2} />
          <Stack.Screen name="Jeopardy3" component = { Jeopardy3 } /> 
          <Stack.Screen name="ShadowHome" component = { ShadowHome } />
          <Stack.Screen name="ShadowDefinition" component = { ShadowDefinition } />
          <Stack.Screen name="SeeShadow1" component = { SeeShadow1 } />
          <Stack.Screen name = "SeeShadow2" component = { SeeShadow2 } />
          <Stack.Screen name = " SeeShadow3 " component = { SeeShadow3 } />
  
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App

const Container = styled.View`
  flex: 1;
  background-color: #ffea7c;
`