import { createStackNavigator, createAppContainer } from 'react-navigation';
import Splash from './src/screens/Splash';
import LoginScreen from './src/screens/LoginScreen';
const navigator = createStackNavigator(
  {
    Splash:Splash,
    Login:LoginScreen
  },
  {
    initialRouteName: 'Splash',
    headerMode:null
  }
);

export default createAppContainer(navigator);
