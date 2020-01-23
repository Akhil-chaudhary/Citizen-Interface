import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  ImageBackground
} from "react-native";

export default class Splash extends Component {
  componentWillMount() {
    setTimeout(() => this.props.navigation.navigate("Login"), 1200);
  }
  render() {
    return (
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.wrapper}>
          <View style={styles.titleWrapper}>
            <Image
              style={{ width: 300, height: 300 }}
              source={require("../../assets/logo.png")}
            />

            <Text style={styles.title}>NCRB</Text>
            <ActivityIndicator size="large" color="#1C8ADB" />
          </View>
          <View>
            <Text style={styles.subtitle}>Citizen Interface</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    paddingTop: 20,
    paddingBottom: 50,
    textAlign: "center",
    color: "black",
    fontSize: 35,
    fontWeight: "500"
  },
  subtitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "200",
    textShadowColor: "grey",
    paddingBottom: 20
  },
  titleWrapper: {
    justifyContent: "center",
    flex: 1
  }
});
