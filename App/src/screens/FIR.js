import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  SafeAreaView,
  ImageBackground,
  ScrollView
} from "react-native";
import "@expo/vector-icons";
import {
  TextInput,
  TouchableOpacity,
  FlatList,
  LongPressGestureHandler
} from "react-native-gesture-handler";
import * as firebase from "firebase";
//import { Header,Right,Center,Left,Icon } from "native-base";
import { Header } from "react-native-elements";
/*import HeaderBar from './HeaderBar';
import Drawer from './Drawer';
import { DrawerItems } from 'react-navigation';*/
export default class FIR extends Component {
  state = {
    email: "",
    displayname: ""
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
        this.props.navigation.navigate("Login");
      });
  };
  render() {
    return (
      <ImageBackground
        source={require("../../assets/Back.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <Header
          leftComponent={{
            icon: "menu",
            color: "#1C8ADB",
            onPress: () => alert("Menu")
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
            icon: "lock",
            color: "#1C8ADB",
            onPress: this.signOutUser
          }}
          backgroundColor="#fff"
        />

        <View style={styles.container}>
          <ScrollView>
            <TouchableOpacity>
              <View style={styles.tab}>
                <Text style={styles.item}>Lost </Text>
                <Image
                  style={styles.img}
                  source={require("../../assets//1.png")}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Lost")}
            >
              <View style={styles.tab}>
                <Text style={styles.item}>Applications</Text>
                <Image
                  style={styles.img}
                  source={require("../../assets//2.png")}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.tab}>
                <Text style={styles.item}>Online FIR</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.tab}>
                <Text style={styles.item}>NOC Request</Text>
                <Image
                  style={styles.img}
                  source={require("../../assets//4.png")}
                />
              </View>
             </TouchableOpacity>
            {/*<TouchableOpacity>
              <View style={styles.tab}>
                <Text style={styles.item}>Appointment Scheduling</Text>
                <Image
                  style={styles.img}
                  source={require("../../assets//6.png")}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.tab}>
                <Text style={styles.item}>Recent Activities</Text>
                <Image
                  style={styles.img}
                  source={require("../../assets//6.png")}
                />
              </View>
            </TouchableOpacity> */}
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
  img: {
    position: "absolute",
    right: 10,
    bottom: 10,
    alignItems: "center",
    height: 50,
    width: 50
  },
  tab: {
    flexDirection: "row",
    marginTop: 14,
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 5
  },
  tab_red: {
    flexDirection: "row",
    marginTop: 14,
    padding: 20,
    backgroundColor: "rgba(255,0,0,0.65)",
    borderRadius: 5
  },
  item: {
    alignItems: "center",
    fontSize: 20
  }
});
