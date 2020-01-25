import React from "react";
import { Platform, Dimensions } from "react-native";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import Form from "./src/screens/Form";
import Clearance from "./src/screens/Clearance";
import AboutScreen from "./src/screens/AboutScreen";
import FIR from "./src/screens/FIR";
import LostFIR from "./src/screens/LostFIR";
import Noc from "./src/screens/Noc";
import HomeScreen from "./HomeScreen";
import Form from "./Form";
import AboutScreen from "./AboutScreen";

const width = Dimensions.get("window").width;
const DrawerConfig = {
  drawerWidth: width * 0.83
};
const Drawer = createDrawerNavigator({
  Home: HomeScreen,
  Form: Form,
  Clearance: Clearance,
  FIR: FIR,
  Lost: LostFIR,
  Noc: Noc,
  About: AboutScreen
},
{
  headerMode: "none"
},
DrawerConfig
)
export default createAppContainer(Drawer);
