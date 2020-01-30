import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  DrawerItems,
  createAppContainer
} from "react-navigation";
import React from 'react';
import { Platform, Dimensions, SafeAreaView,View,Image,Button,StyleSheet } from "react-native";
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
import MapScreen from './src/screens/MapScreen';
import * as firebase from "firebase";
import { ScrollView } from "react-native-gesture-handler";
const width = Dimensions.get("window").width;
const DrawerConfig = {
  drawerWidth: width * 0.83
};

const CustomDrawerComponent=(props)=>(
  <SafeAreaView style={{flex:1,top:40}}>
    <View style={{height:150,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
      <Image source={require('./assets/logo.png')} style={{height:120,width:120,}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
      <Button
      style={styles.button}
      title='LOGOUT'
      onPress={this.signOutUser}
      />
    </ScrollView>
  </SafeAreaView>
)
const Drawer = createDrawerNavigator({
  Home: HomeScreen,
  Form: Form,
  FIR: FIR,
  NOC: Noc,
  Map:MapScreen,
  About: AboutScreen
},
{
  contentComponent:CustomDrawerComponent,
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

var firebaseConfig = {
  apiKey: "AIzaSyAf79sr9bJjAHtQpJyQa7DVVNZvjwZ1zgQ",
  authDomain: "sih2020-42ea1.firebaseapp.com",
  databaseURL: "https://sih2020-42ea1.firebaseio.com",
  projectId: "sih2020-42ea1",
  storageBucket: "sih2020-42ea1.appspot.com",
  messagingSenderId: "43086957866",
  appId: "1:43086957866:web:87d03b215fb73387816253"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default createAppContainer(navigator);
const styles = StyleSheet.create({
button: {
  backgroundColor: "#1C8ADB",
  borderRadius: 40,
  height: 50,
  marginHorizontal: "10%",
  alignItems: "center",
  justifyContent: "center"
}
});