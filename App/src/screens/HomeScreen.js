import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  SafeAreaView,
  ImageBackground,
  Linking,
  ScrollView,
  YellowBox
} from "react-native";
import "@expo/vector-icons";

import Ripple from "react-native-material-ripple";
import {
  TextInput,
  TouchableOpacity,
  FlatList,
  LongPressGestureHandler
} from "react-native-gesture-handler";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import AwesomeButton from "react-native-really-awesome-button";
import * as firebase from "firebase";
import { Header } from "react-native-elements";
import call from "react-native-phone-call";
import * as SMS from "expo-sms";
export default class HomeScreen extends Component {
  state = {
    email: "",
    displayname: "",
    latitude: "",
    longitude: ""
  };
  componentDidMount() {
    const { email, displayname } = firebase.auth().currentUser;
    this.setState({ email, displayname });
  }
  signOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        firebase.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? "App" : "Auth");
        });
      });
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    });
  };
  call = async () => {
    let sms =
      "SOS latitude:" +
      String(this.state.latitude) +
      " longitude:" +
      String(this.state.longitude);
    await SMS.sendSMSAsync(["8181022104", "8171940441"], sms);
    const args = {
      number: "8171940441",
      prompt: false
    };

    call(args).catch(console.error);
  };
  render() {
    this._getLocationAsync();
    return (
      <ImageBackground
        source={require("../../assets/Back2.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <Header
          leftComponent={{
            icon: "menu",
            color: "#1C8ADB",
            onPress: () => this.props.navigation.openDrawer()
          }}
          centerComponent={{
            text: "MENU",
            style: {
              color: "#1C8ADB",
              fontWeight: "bold",
              fontSize: 22,
              letterSpacing: 3
            }
          }}
          rightComponent={{
            icon: "exit-to-app",
            color: "#1C8ADB",
            onPress: this.signOutUser
          }}
          backgroundColor="#fff"
        />

        <View style={styles.container}>
          <ScrollView>
            <View style={styles.splitupper}>
              <View style={styles.split}>
                <Ripple
                  rippleColor="white"
                  backgroundColor="red"
                  style={styles.tab}
                  onPress={() => this.call()}
                >
                  <Image
                    style={{alignItems: "center",
                    height: 80,
                    width: 80}}
                    source={require("../../assets//SOS.png")}
                  />
                  <Text
                    style={{
                      alignItems: "center",
                      fontSize: 20,
                      color: "white",
                      fontWeight: "600",
                      textAlign: "center"
                    }}
                  >
                   SOS
                  </Text>
                </Ripple>
              </View>
              <View style={styles.split}>
                <Ripple
                  rippleColor="#1C8ADB"
                  backgroundColor="white"
                  style={styles.tab}
                  onPress={() => this.props.navigation.navigate("Chat")}
                >
                  <Image
                  style={{alignItems: "center",
                  height: 80,
                  width: 80}}
                    source={require("../../assets//Chatbot.png")}
                  />
                  <Text style={styles.item}>CHATBOT</Text>
                </Ripple>
              </View>
            </View>
            <View style={styles.splitupper}>
              <View style={styles.split}>
                <Ripple
                  rippleColor="#1C8ADB"
                  backgroundColor="white"
                  style={styles.tab}
                  onPress={() => this.props.navigation.navigate("Form")}
                >
                  <Image
                    style={styles.img}
                    source={require("../../assets//2.png")}
                  />
                  <Text style={styles.item}>APPLY FORMS</Text>
                </Ripple>
              </View>
              <View style={styles.split}>
                <Ripple
                  rippleColor="#1C8ADB"
                  backgroundColor="white"
                  style={styles.tab}
                  onPress={() => this.props.navigation.navigate("FIR")}
                >
                  <Image
                    style={styles.img}
                    source={require("../../assets//3.png")}
                  />
                  <Text style={styles.item}>E-FIR</Text>
                </Ripple>
              </View>
            </View>
            <View style={styles.splitupper}>
              <View style={styles.split}>
                <Ripple
                  rippleColor="#1C8ADB"
                  backgroundColor="white"
                  style={styles.tab}
                  onPress={() => this.props.navigation.navigate("Noc")}
                >
                  <Image
                    style={styles.img}
                    source={require("../../assets//4.png")}
                  />
                  <Text style={styles.item}>NOC REQUEST</Text>
                </Ripple>
              </View>
              <View style={styles.split}>
                <Ripple
                  rippleColor="#1C8ADB"
                  backgroundColor="white"
                  style={styles.tab}
                  onPress={() => this.props.navigation.navigate("Recent")}
                >
                  <Image
                    style={styles.img}
                    source={require("../../assets//5.png")}
                  />
                  <Text style={styles.item}>RECENT ACTIVITIES</Text>
                </Ripple>
              </View>
            </View>
            <View style={styles.splitupper}>
              <View style={styles.split}>
                <Ripple
                  rippleColor="#1C8ADB"
                  backgroundColor="white"
                  style={styles.tab}
                  onPress={() => this.props.navigation.navigate("Map")}
                >
                  <Image
                    style={styles.img}
                    source={require("../../assets//Map.png")}
                  />
                  <Text style={styles.item}>POLICE STATIONS</Text>
                </Ripple>
              </View>
              <View style={styles.split}>
                <Ripple
                  rippleColor="#1C8ADB"
                  backgroundColor="white"
                  style={styles.tab}
                  onPress={() => this.props.navigation.navigate('Tips')}
                >
                  <Image
                    style={styles.img}
                    source={require("../../assets//Tips.png")}
                  />
                  <Text style={styles.item}>SAFETY TIPS</Text>
                </Ripple>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  splitupper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  split: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
    marginHorizontal:6,
  },
  sos: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  img: {
    alignItems: "center",
    height: 60,
    width: 60
  },
  tab: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    height: 150,
    padding: 20,
    borderRadius: 8
  },
  item: {
    alignItems: "center",
    fontSize: 20,
    paddingTop:10,
    fontWeight: "500",
    textAlign: "center"
  },
  titleWrapper: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
