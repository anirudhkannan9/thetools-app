import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import CuesHome from '../screens/CuesHome'


const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Cues: CuesHome,
})

export default createAppContainer(AppNavigator)

