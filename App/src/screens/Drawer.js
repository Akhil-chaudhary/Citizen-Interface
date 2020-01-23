import React from "react";
import { Platform, Dimensions } from "react-native";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import HomeScreen from "./HomeScreen";
import Form from "./Form";
import AboutScreen from "./AboutScreen";

const width = Dimensions.get("window").width;
const DrawerConfig = {
  drawerWidth: width * 0.83
};
const Drawer = createDrawerNavigator(
  {
    Form: Form,
    About: AboutScreen
  },
  DrawerConfig
);
export default createAppContainer(Drawer);
