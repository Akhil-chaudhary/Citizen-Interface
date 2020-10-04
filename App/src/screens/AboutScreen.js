import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ImageBackground,
  ScrollView,
  rgba
} from "react-native";
import { Header } from "react-native-elements";
import React, { Component } from "react";
export default class AboutScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <Header
          leftComponent={{
            icon: "menu",
            color: "#fff",
            onPress: () => this.props.navigation.openDrawer()
          }}
          centerComponent={{
            text: "ABOUT",
            style: {
              color: "#fff",
              
              fontSize: 22,
              letterSpacing: 3
            }
          }}
          rightComponent={{
            icon: "close",
            color: "#fff",
            onPress: () => this.props.navigation.navigate("Home")
          }}
          backgroundColor="#1C8ADB"
        />
        <View style={styles.wrapper}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require("../../assets/logo.png")}
          />
        </View>

        <ScrollView style={{ top: "10%", marginHorizontal: "4%" }}>
          <Text style={styles.text}>About NCRB:</Text>
          <Text style={{ fontSize: 20, paddingBottom: 35 }}>
            {"\u2022" + " "}NCRB shall empower Indian Police with Information
            Technology and Criminal Intelligence to enable them to effectively
            enforce the law and improve public service delivery.{"\n"}
            {"\u2022" + " "}
            This shall be achieved through coordination with police forces at
            National and International level, upgradation of Crime analysis
            technology, developing IT capacity, IT enabled solutions compliance
            & continued improvement of QMS.{"\n"}
            {"\u2022" + " "}
            Established on 11th March 1986 with following objectives :{"\n"}
            1-To prepare an enabling IT environment - policy framework,
            guidelines, architecture, best practices for Police Forces
            throughout the country To improve knowledge based pro-active
            policing with the use of IT for improving internal efficiency,
            effectiveness and public service delivery{"\n"}
            2-To lead and coordinate development of IT products and build a
            National Resource Centre of IT solutions for police organizations
            {"\n"}
            3-To create and maintain secure sharable National Databases on
            crimes, criminals, property and organized criminal gangs for law
            enforcement agencies and promote their use for public service
            delivery{"\n"}
            4-To obtain, compile, analyze and publish the National Crime
            Statistics{"\n"}
            5-To obtain, process and disseminate finger print records of
            criminals including foreign criminals to establish their identity;
            promote automation of State Finger Print Bureaux and encourage
            research for the development of Finger Print Science{"\n"}
            6-To provide training in IT and Finger Print Science for capacity
            building in Police Forces{"\n"}
            7-To coordinate development of Modern State Crime Records Bureaux
            {"\n"}
            8-To interact with Foreign Police Forces to share IT practices and
            crime information.{"\n"}
          </Text>
        </ScrollView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    color: "#1C8ADB",
    fontSize: 22
  },
  wrapper: {
    top: "7%",
    backgroundColor: "transparent",
    alignItems: "center"
  }
});
