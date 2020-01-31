import React, { useEffect, Component, useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  ImageBackground,
  ImageBackgroundComponent,
  Platform,
  PermissionsAndroid,
  AlertIOS
} from "react-native";
import { Header } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dropdown } from "react-native-material-dropdown";
// import { requestPermissionAsync } from "expo-location";
// import * as Location from "expo-location";
// import * as Permissions from "expo-permissions";
// import MapScreen from "./MapScreen.js";
// import MapView, {
//   Marker,
//   AnimatedRegion,
//   Polyline,
//   PROVIDER_GOOGLE
// } from "react-native-maps";
// import haversine from "haversine";
import Map from "./MapScreen";
import * as firebase from "firebase";
// var  firebaseConfig2 = {
//   apiKey: "AIzaSyB5mHPt2DrHm2IbuQXWBPV4sJw30VGlbIA",
//   authDomain: "fir-1-d9120.firebaseapp.com",
//   databaseURL: "https://fir-1-d9120.firebaseio.com",
//   projectId: "fir-1-d9120",
//   storageBucket: "fir-1-d9120.appspot.com",
//   messagingSenderId: "402680960829",
//   appId: "1:402680960829:web:7b4076d6302c25c12bd754",
//   measurementId: "G-C7HBLLE92Y"
// };
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
let States = [];
let District = [];
let station = [];
export default class Clearance extends Component {
  

  state = {
    Name: "",
    Father_name: "",
    Address: "",
    Mobile: "",
    Email: "",
    Residing: "",
    Station: "",
    State: "",
    Aadhar: "",
    District: "",
    Gender: "",
    errorMessage: null
  };
  handleSubmit = () => {
    firebase
      .database()
      .ref("/Clearance")
      .push(this.state)
      .then(this.props.navigation.navigate("Form"));
  };
  ///-----------------------Location Fetch-----------------------
  // componentDidMount() {
  //   this._getLocationAsync();
  // }
  // _getLocationAsync = async () => {
  //   let { status } = await Permissions.askAsync(Permissions.LOCATION);
  //   if (status !== "granted") {
  //     this.setState({
  //       locationResult: "Permission to access location was denied",
  //     });
  //   }

  //   let location = await Location.getCurrentPositionAsync({});
  //   global.latitude=location.coords.latitude;
  //   global.longitude=location.coords.longitude;
  //   console.log(global.longitude,global.latitude);
  // };
  //-------------------------------Location taken--------------------------
  componentWillMount() {
    this.fetchDataStates();
  }
  fetchDataStates = async () => {
    var fireBaseResponse = firebase
      .database()
      .ref()
      .child("States/");
    fireBaseResponse.once("value").then(snapshot => {
      snapshot.forEach(child => {
        var temp = child.key;
        States.push({ value: temp });
        return false;
      });
      // console.log(States);
    });
  };
  fetchDataDistrict = async () => {
    var fireBaseResponse = firebase
      .database()
      .ref("States/")
      .child(this.state.State);
    fireBaseResponse.once("value").then(snapshot => {
      snapshot.forEach(child => {
        var temp = child.key;
        District.push({ value: temp });
        return false;
      });
      // console.log(District);
    });
  };
  fetchDataStation = async () => {
    var fireBaseResponse = firebase
      .database()
      .ref("States/" + this.state.State + "/")
      .child(this.state.District);
    fireBaseResponse.once("value").then(snapshot => {
      snapshot.forEach(item => {
        var temp = item.val();
        station.push({ value: temp });
        return false;
      });
      // console.log(station);
    });
  };

  render() {
    this.fetchDataStation();
    this.fetchDataDistrict();
    let data = [
      {
        value: "Female"
      },
      {
        value: "Male"
      },
      {
        value: "Other"
      }
    ];

    return (
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <Header
          leftComponent={{
            icon: "home",
            color: "#fff",
            onPress: () => this.props.navigation.navigate("Home")
          }}
          centerComponent={{
            text: "Clearance Certificate",
            style: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: 18,
              letterSpacing: 1
            }
          }}
          rightComponent={{
            icon: "close",
            color: "#fff",
            onPress: () => this.props.navigation.navigate("Form")
          }}
          backgroundColor="#1C8ADB"
        />
        <View>
          <Map />
        </View>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <ScrollView>
            <View style={styles.entrybox}>
              <Text style={styles.text}>State</Text>
              <Dropdown
                style={styles.drop}
                onChangeText={State => this.setState({ State })}
                value={this.state.State}
                baseColor="#1C8ADB"
                data={States}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>District</Text>
              <Dropdown
                style={styles.drop}
                onChangeText={District => this.setState({ District })}
                value={this.state.District}
                baseColor="#1C8ADB"
                data={District}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Police Station</Text>
              <Dropdown
                style={styles.drop}
                onChangeText={Station => this.setState({ Station })}
                value={this.state.Station}
                baseColor="#1C8ADB"
                data={station}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Full name</Text>
              <TextInput
                style={styles.input}
                placeholder="Full name"
                placeholderTextColor="#000"
                onChangeText={Name => this.setState({ Name })}
                value={this.state.Name}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Father's name</Text>
              <TextInput
                style={styles.input}
                placeholder="Father`s name"
                placeholderTextColor="#000"
                onChangeText={Father_name => this.setState({ Father_name })}
                value={this.state.Father_name}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Address"
                placeholderTextColor="#000"
                onChangeText={Address => this.setState({ Address })}
                value={this.state.Address}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Mobile Number</Text>
              <TextInput
                numeric
                style={styles.input}
                placeholder="Mobile Number"
                placeholderTextColor="#000"
                onChangeText={Mobile => this.setState({ Mobile })}
                value={this.state.Mobile}
              />
            </View>

            <View style={styles.entrybox}>
              <Text style={styles.text}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#000"
                onChangeText={Email => this.setState({ Email })}
                value={this.state.Email}
              />
            </View>

            <View style={styles.entrybox}>
              <Text style={styles.text}>Residing Period</Text>
              <TextInput
                style={styles.input}
                placeholder="Details"
                placeholderTextColor="#000"
                onChangeText={Residing => this.setState({ Residing })}
                value={this.state.Residing}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Aadhar Number</Text>
              <TextInput
                style={styles.input}
                numeric
                placeholder="Number"
                placeholderTextColor="#000"
                onChangeText={Aadhar => this.setState({ Aadhar })}
                value={this.state.Aadhar}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Gender</Text>
              <Dropdown
                style={styles.drop}
                onChangeText={Gender => this.setState({ Gender })}
                value={this.state.Gender}
                baseColor="#1C8ADB"
                data={data}
              />
            </View>
            <View style={{ paddingBottom: 100 }}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.handleSubmit}
              >
                <Text
                  style={{ color: "#FFF", fontWeight: "400", fontSize: 22 }}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
    paddingTop: 50
  },
  split: {
    flexDirection: "row"
  },
  error: {
    position: "absolute",
    bottom: 0,
    color: "red",
    fontSize: 12
  },
  // map: {
  //   padding: 100,
  //   justifyContent: "flex-end",
  //   alignItems: "center"
  // },
  text: {
    color: "#1C8ADB",
    fontWeight: "bold",
    fontSize: 22
  },
  form: {
    flex: 1,
    marginBottom: 60,
    marginHorizontal: 30
  },
  input: {
    borderBottomColor: "#1C8ADB",
    borderBottomWidth: 2,
    height: 40,
    fontSize: 20,
    color: "black"
  },
  drop: {
    fontSize: 20
  },
  entrybox: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: "#1C8ADB",
    borderRadius: 40,
    height: 50,
    marginHorizontal: "10%",
    alignItems: "center",
    justifyContent: "center"
  }
});
