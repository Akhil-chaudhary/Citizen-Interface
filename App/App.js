import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
  createAppContainer
} from "react-navigation";
import Splash from "./src/screens/Splash";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import Form from "./src/screens/Form";
import AboutScreen from "./src/screens/AboutScreen";
import * as firebase from "firebase";
const navigator = createStackNavigator(
  {
    Splash: Splash,
    Login: LoginScreen,
    Register: RegisterScreen,
    Home: HomeScreen,
    Form: Form,
    About: AboutScreen
  },
  {
    initialRouteName: "Splash",
    headerMode: "none"
  }
);

const firebaseConfig = {
  apiKey: "AIzaSyB5mHPt2DrHm2IbuQXWBPV4sJw30VGlbIA",
  authDomain: "fir-1-d9120.firebaseapp.com",
  databaseURL: "https://fir-1-d9120.firebaseio.com",
  projectId: "fir-1-d9120",
  storageBucket: "fir-1-d9120.appspot.com"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default createAppContainer(navigator);
