import React, { useEffect, Component, useState } from "react";
import {
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
  Alert
} from "react-native";
import { Header } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dropdown } from "react-native-material-dropdown";
import DatePicker from "react-native-datepicker";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import * as firebase from "firebase";
let States = [];
let District = [];
let station = [];
let User = [];
export default class Clearance extends Component {
  state = {
    Name: "",
    Father_name: "",
    Address: "",
    Mobile: "",
    Email: "",
    Residing_from: "",
    Residing_till: "",
    Station: "",
    State: "",
    Aadhar: "",
    District: "",
    Gender: "",
    longitude: "",
    latitude: "",
    //User
    User_Token: "",
    errorMessage: null
  };

  handleSubmit = () => {
    firebase
      .database()
      .ref("/Clearance")
      .push(this.state)
      .then(this.props.navigation.navigate("Form"));
  };
  fetchDataUser = async () =>{
    var fireBaseResponse = firebase
      .database()
      .ref("Citizen Users/")
      .child(firebase.auth().currentUser.email.replace(".", "@"));
    fireBaseResponse.once("value").then(snapshot =>{
      snapshot.forEach(child =>{
        var temp = child.val();
        this.state.User_Token=temp;
        return false;
      });
      console.log(this.state.User_Token);
    });
  };
  ///-----------------------Location Fetch-----------------------

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
  //-------------------------------Location taken--------------------------
  componentWillMount() {
    this.fetchDataStates();
  }
  fetchDataStates = async () => {
    var fireBaseResponse = firebase
      .database()
      .ref()
      .child("Stations/");
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
      .ref("Stations/")
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
      .ref("Stations/" + this.state.State + "/")
      .child(this.state.District);
    fireBaseResponse.once("value").then(snapshot => {
      snapshot.forEach(item => {
        var temp = item.key;
        station.push({ value: temp });
        return false;
      });
      // console.log(station);
    });
  };

  render() {
    this.fetchDataUser();

    this.fetchDataDistrict();
    this.fetchDataStation();
    // this._getLocationAsync();

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
            icon: "arrow-back",
            color: "#fff",
            onPress: () => this.props.navigation.navigate("Form")
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
            icon: "help",
            color: "#fff",
            onPress: () =>
              Alert.alert(
                "Help",
                "Teri help karega ye text The core of React Native is worked on full-time by Facebooks React Native team. But there are far more people in the community who make key contributions and fix things. If the issue you are facing is code related, you should consider checking the open issues in the main repository. If you cannot find an existing issue, please use the Bug Report template to create an issue with a minimal example.Teri help karega ye text The core of React Native is worked on full-time by Facebooks React Native team. But there are far more people in the community who make key contributions and fix things. If the issue you are facing is code related, you should consider checking the open issues in the main repository. If you cannot find an existing issue, please use the Bug Report template to create an issue with a minimal example.Teri help karega ye text The core of React Native is worked on full-time by Facebooks React Native team. But there are far more people in the community who make key contributions and fix things. If the issue you are facing is code related, you should consider checking the open issues in the main repository. If you cannot find an existing issue, please use the Bug Report template to create an issue with a minimal example.Teri help karega ye text The core of React Native is worked on full-time by Facebooks React Native team. But there are far more people in the community who make key contributions and fix things. If the issue you are facing is code related, you should consider checking the open issues in the main repository. If you cannot find an existing issue, please use the Bug Report template to create an issue with a minimal example.Teri help karega ye text The core of React Native is worked on full-time by Facebooks React Native team. But there are far more people in the community who make key contributions and fix things. If the issue you are facing is code related, you should consider checking the open issues in the main repository. If you cannot find an existing issue, please use the Bug Report template to create an issue with a minimal example."
              )
          }}
          backgroundColor="#1C8ADB"
        />
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
              <Text style={styles.text}>Father`s/Gaurdian`s name</Text>
              <TextInput
                style={styles.input}
                placeholder="Father`s/Gaurdian`s name"
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
              <Text style={styles.text}>Residing from</Text>
              <DatePicker
                style={{ width: 200, backgroundColor: "#1C8ADB" }}
                date={this.state.Residing_from}
                mode="date"
                placeholder="Select Date"
                placeholderTextColor="black"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2019-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                }}
                onDateChange={Residing_from => {
                  this.setState({ Residing_from });
                }}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Residing till</Text>
              <DatePicker
                style={{ width: 200, backgroundColor: "#1C8ADB" }}
                date={this.state.Residing_till}
                mode="date"
                placeholder="Select Date"
                placeholderTextColor="black"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2019-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                }}
                onDateChange={Residing_till => {
                  this.setState({ Residing_till });
                }}
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
