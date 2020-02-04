import React, { Component } from "react";
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
  Alert
} from "react-native";
import { Header } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { Dropdown } from "react-native-material-dropdown";
import * as firebase from "firebase";

let States = [];
let District = [];
let station = [];
let User = [];
var photo;
var count=0;
export default class Noc extends Component {
  state = {
    Name: "",
    Father_name: "",
    Address: "",
    Mobile: "",
    Email: "",
    Station: "",
    State: "",
    Aadhar: "",
    District: "",
    Gender: "",
    Owned1: "",
    Owned: "",
    Other: "",
    // longitude: "",
    // latitude: "",
    //User
    User_Name: "",
    User_Aadhar: "",
    User_Email: "",
    User_Number: "",
    User_Token: "",
    errorMessage: null
  };

  handleSubmit = () => {
    // this.state.image = photo;
    firebase
      .database()
      .ref("NOC")
      .push(this.state)
      .then(this.props.navigation.navigate("Home"));
  };
  fetchDataUser = async () => {
    var fireBaseResponse = firebase
      .database()
      .ref("Citizen Users/")
      .child(firebase.auth().currentUser.email.replace(".", "@"));
    fireBaseResponse.once("value").then(snapshot => {
      snapshot.forEach(child => {
        var temp = child.val();
        User.push(temp);
        return false;
      });
      (this.state.User_Name = User[2]),
        (this.state.User_Aadhar = User[0]),
        (this.state.User_Email = User[1]),
        (this.state.User_Number = User[3]),
        (this.state.User_Token = User[4]);
    });
  };
  ///-----------------------Location Fetch-----------------------
  // componentDidMount() {
  //   this._getLocationAsync();
  // }
  // _getLocationAsync = async () =>{
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
      .child("Stations");
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
      .ref("Stations")
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
      .ref("Stations/" + this.state.State)
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
  chooseImage = async () => {
    //let result=await ImagePicker.launchCameraAsync();
    let result = await ImagePicker.launchImageLibraryAsync();

    // this.setState({ image:blob.data.name })
    if (!result.cancelled) {
      this.uploadImage(
        result.uri,
        this.state.User_Email.replace(".", "@") + String(count)
      )
        .then(() => {
          count=count+1;
          Alert.alert("Success");
        })
        .catch(error => {
          Alert.alert(error);
        });
    }
  };
  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    blob = await response.blob();
    var ref = firebase
      .storage()
      .ref("NOC")
      .child(imageName);
    // firebase
    // .database()
    // .ref("Tenant/")
    // .push({image:blob.data.name});
    photo = blob.data.name;
    return ref.put(blob);
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

    let data2 = [
      {
        value: "Individual"
      },
      {
        value: "Jointily"
      },
      {
        value: "Other"
      }
    ];

    let data3 = [
      {
        value: "Government"
      },
      {
        value: "Public Sector Undertaking"
      },
      {
        value: "Firm"
      },
      {
        value: "Private Sector Undertaking"
      },
      {
        value: "Other"
      }
    ];

    let data4 = [
      {
        value: "Yes"
      },
      {
        value: "No"
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
            onPress: () => this.props.navigation.navigate("Home")
          }}
          centerComponent={{
            text: "NOC",
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
                autoCompleteType="name"
                autoCapitalize="words"
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
                autoCapitalize="words"
                autoCompleteType="name"
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
                multiline
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
                keyboardType="phone-pad"
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
                autoCompleteType="email"
                placeholderTextColor="#000"
                onChangeText={Email => this.setState({ Email })}
                value={this.state.Email}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Aadhar</Text>
              <TextInput
                style={styles.input}
                placeholder="Aadhar"
                keyboardType="phone-pad"
                placeholderTextColor="#000"
                onChangeText={Aadhar => this.setState({ Aadhar })}
                value={this.state.Aadhar}
              />
            </View>

            <View style={styles.entrybox}>
              <Text style={styles.text}>Whether the Property is Owned by</Text>
              <Dropdown
                style={styles.drop}
                onChangeText={Owned => this.setState({ Owned })}
                value={this.state.Owned}
                baseColor="#1C8ADB"
                data={data3}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Whether the Property is Owned by</Text>

              <Dropdown
                style={styles.drop}
                onChangeText={Owned1 => this.setState({ Owned1 })}
                value={this.state.Owned1}
                baseColor="#1C8ADB"
                data={data2}
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
            <View style={styles.entrybox}>
              <Text style={styles.text}>
                The Applicant is other than the Owner ?{" "}
              </Text>
              <Dropdown
                style={styles.drop}
                onChangeText={Other => this.setState({ Other })}
                value={this.state.Other}
                baseColor="#1C8ADB"
                data={data4}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Upload Documents</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={this.chooseImage}
              >
                <Text
                  style={{ color: "#FFF", fontWeight: "400", fontSize: 22 }}
                >
                  Upload
                </Text>
              </TouchableOpacity>
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
