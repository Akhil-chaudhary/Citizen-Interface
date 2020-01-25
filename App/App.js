import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  DrawerItems,
  createAppContainer
} from "react-navigation";
import { Platform, Dimensions } from "react-native";
import Splash from "./src/screens/Splash";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import Form from "./src/screens/Form";
import Clearance from "./src/screens/Clearance";
import AboutScreen from "./src/screens/AboutScreen";
import FIR from "./src/screens/FIR";
import LostFIR from "./src/screens/LostFIR";
import Noc from "./src/screens/Noc";
import Tenant from "./src/screens/Tenant";
import * as firebase from "firebase";
const width = Dimensions.get("window").width;
const DrawerConfig = {
  drawerWidth: width * 0.83
};
const Drawer = createDrawerNavigator({
  Home: HomeScreen,
  Form: Form,
  FIR: FIR,
  Noc: Noc,
  About: AboutScreen
},
{
  headerMode: "none"
},
DrawerConfig
)
const AppStack = createStackNavigator({
  Drawer:Drawer,
  Home: HomeScreen,
  Form: Form,
  Clearance: Clearance,
  Tenant:Tenant,
  FIR: FIR,
  Lost: LostFIR,
  Noc: Noc,
  About: AboutScreen
},
{
  headerMode: "none"
})
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
},
{
  headerMode: "none"
})
const navigator = createSwitchNavigator(
  {
    Splash: Splash,
    App: AppStack,
    Auth: AuthStack
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
