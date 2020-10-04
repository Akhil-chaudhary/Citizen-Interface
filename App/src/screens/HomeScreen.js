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

const sosH = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      color: "white",
      
      textAlign: "center"
    }}
  >
    खतरा{" "}
  </Text>
);
const sosE = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      color: "white",
      
      textAlign: "center"
    }}
  >
    SOS
  </Text>
);

const chatbotH = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    चैटबॉट{" "}
  </Text>
);
const chatbotE = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    CHATBOT
  </Text>
);

const applyH = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    आवेदन फार्म{" "}
  </Text>
);
const applyE = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    APPLY FORMS
  </Text>
);

const efirH = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    ई-प्राथमिकी.
  </Text>
);
const efirE = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    E-FIR
  </Text>
);

const nocreqH = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    अनापत्ति प्रमाण पत्र अनुरोध
  </Text>
);
const nocreqE = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    NOC REQUEST
  </Text>
);

const recentH = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    हाल की गतिविधियाँ
  </Text>
);
const recentE = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    RECENT ACTIVITIES
  </Text>
);

const stationH = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    पुलिस थाने
  </Text>
);
const stationE = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    POLICE STATIONS
  </Text>
);

const safetyH = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    सुरक्षा टिप्स{" "}
  </Text>
);
const safetyE = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    SAFETY TIPS
  </Text>
);

const feedbackH = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    प्रतिपुष्टि{" "}
  </Text>
);
const feedbackE = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    FEEDBACK
  </Text>
);

const aboutH = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    बारे में
  </Text>
);
const aboutE = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    ABOUT
  </Text>
);

const langH = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    भाषा बदले
  </Text>
);
const langE = (
  <Text
    style={{
      alignItems: "center",
      fontSize: 20,
      paddingTop: 10,
      
      textAlign: "center"
    }}
  >
    Change language
  </Text>
);

export default class HomeScreen extends Component {
  state = {
    email: "",
    displayname: "",
    latitude: "",
    longitude: "",
    language: 1
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
  switch = () => {
    if (this.state.language === 0) {
      alert("Language changed to English");
      this.setState({ language: 1 });
      return false; //HINDI
    } else if (this.state.language === 1) {
      alert("Language changed to Hindi");
      this.setState({ language: 0 });
      return false; //eNGLISH
    }
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
              ,
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
            <View style={styles.split}>
              <Ripple
                rippleColor="white"
                backgroundColor="#f5ad42"
                style={styles.tab}
                onPress={() => this.switch()}
              >
                <Image
                  style={{ alignItems: "center", height: 80, width: 80 }}
                  source={require("../../assets//lang.png")}
                />
                {this.state.language === 0 ? langH : langE}
              </Ripple>
            </View>
            <View style={styles.splitupper}>
              <View style={styles.split}>
                <Ripple
                  rippleColor="white"
                  backgroundColor="red"
                  style={styles.tab}
                  onPress={() => this.call()}
                >
                  <Image
                    style={{ alignItems: "center", height: 80, width: 80 }}
                    source={require("../../assets//SOS.png")}
                  />
                  {this.state.language === 0 ? sosH : sosE}
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
                    style={{ alignItems: "center", height: 80, width: 80 }}
                    source={require("../../assets//Chatbot.png")}
                  />
                  {this.state.language === 0 ? chatbotH : chatbotE}
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
                  {this.state.language === 0 ? applyH : applyE}
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
                  {this.state.language === 0 ? efirH : efirE}
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
                  {this.state.language === 0 ? nocreqH : nocreqE}
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
                  {this.state.language === 0 ? recentH : recentE}
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
                  {this.state.language === 0 ? stationH : stationE}
                </Ripple>
              </View>
              <View style={styles.split}>
                <Ripple
                  rippleColor="#1C8ADB"
                  backgroundColor="white"
                  style={styles.tab}
                  onPress={() => this.props.navigation.navigate("Tips")}
                >
                  <Image
                    style={styles.img}
                    source={require("../../assets//Tips.png")}
                  />
                  {this.state.language === 0 ? safetyH : safetyE}
                </Ripple>
              </View>
            </View>
            <View style={styles.splitupper}>
              <View style={styles.split}>
                <Ripple
                  rippleColor="#1C8ADB"
                  backgroundColor="white"
                  style={styles.tab}
                  onPress={() => this.props.navigation.navigate("Feedback")}
                >
                  <Image
                    style={{ alignItems: "center", height: 80, width: 80 }}
                    source={require("../../assets//feed.png")}
                  />
                  {this.state.language === 0 ? feedbackH : feedbackE}
                </Ripple>
              </View>
              <View style={styles.split}>
                <Ripple
                  rippleColor="#1C8ADB"
                  backgroundColor="white"
                  style={styles.tab}
                  onPress={() => this.props.navigation.navigate("About")}
                >
                  <Image
                    style={{ alignItems: "center", height: 80, width: 80 }}
                    source={require("../../assets//about.png")}
                  />
                  {this.state.language === 0 ? aboutH : aboutE}
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
    padding: 10
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
    marginHorizontal: 6
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
    paddingTop: 10,
    
    textAlign: "center"
  },
  titleWrapper: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
