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
import { Dropdown } from "react-native-material-dropdown";
import * as ImagePicker from "expo-image-picker";
import DatePicker from "react-native-datepicker";
import * as firebase from "firebase";
var photo;
// var type='Owner';

let User = [];
let States = [];
let District = [];
let station = [];
export default class Tenant extends Component {
  state = {
    // imgtype: "",
    Name: "",
    Address: "",
    Mobile: "",
    Rental: "",
    Rental_type: "",
    Tenant_name: "",
    DOB: "",
    Tenant_mob: "",
    Tenant_permanant_add: "",
    Reference1: "",
    Mobile1: "",
    Reference2: "",
    Mobile2: "",
    PAN: "",
    Voting_card: "",
    image: "",
    Station: "",
    State: "",
    District: "",
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
    this.state.image = photo;
    firebase
      .database()
      .ref("/Tenant")
      .push(this.state)
      .then(this.props.navigation.navigate("Form"));
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
  // _getLocationAsync = async () =>{
  //   let { status } = await Permissions.askAsync(Permissions.LOCATION);
  //   if (status !== "granted") {
  //     this.setState({
  //       locationResult: "Permission to access location was denied"
  //     });
  //   }

  //   let location = await Location.getCurrentPositionAsync({});
  //   this.setState({
  //     latitude: location.coords.latitude,
  //     longitude: location.coords.longitude
  //   });
  // };

  chooseImage = async () => {
    //let result=await ImagePicker.launchCameraAsync();
    let result = await ImagePicker.launchImageLibraryAsync();

    // this.setState({ image:blob.data.name })
    if (!result.cancelled) {
      this.uploadImage(
        result.uri,
        this.state.User_Email.replace(".", "@") + "/"
      )
        .then(() => {
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
      .ref("Tenant/")
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
    // this._getLocationAsync();
    this.fetchDataStation();
    this.fetchDataDistrict();
    let data = [
      {
        value: "Residential"
      },
      {
        value: "Commercial"
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
            text: "Tenant",
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
              <Text style={styles.text}>House Owner Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Full name"
                placeholderTextColor="#000"
                onChangeText={Name => this.setState({ Name })}
                value={this.state.Name}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Current Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Address"
                placeholderTextColor="#000"
                onChangeText={Address => this.setState({ Address })}
                value={this.state.Address}
              />
            </View>

            <View style={styles.entrybox}>
              <Text style={styles.text}>Current Number</Text>
              <TextInput
                style={styles.input}
                numeric
                placeholder="Mobile"
                placeholderTextColor="#000"
                onChangeText={Mobile => this.setState({ Mobile })}
                value={this.state.Mobile}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Rental Property Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Address"
                placeholderTextColor="#000"
                onChangeText={Rental => this.setState({ Rental })}
                value={this.state.Rental}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>
                {" "}
                Property For Rental Residentail/Commerical
              </Text>
              <Dropdown
                style={styles.drop}
                onChangeText={Rental_type => this.setState({ Rental_type })}
                value={this.state.Rental_type}
                baseColor="#1C8ADB"
                data={data}
              />
            </View>
            <Text style={styles.text}>Tenant information</Text>

            <View style={styles.entrybox}>
              <Text style={styles.text}>Tenant Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Full name"
                placeholderTextColor="#000"
                onChangeText={Tenant_name => this.setState({ Tenant_name })}
                value={this.state.Tenant_name}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Date Of Birth</Text>
              <DatePicker
                style={{ width: 200, backgroundColor: "#1C8ADB" }}
                date={this.state.DOB}
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
                onDateChange={DOB => {
                  this.setState({ DOB });
                }}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Contact number</Text>
              <TextInput
                style={styles.input}
                numeric
                placeholder="Mobile"
                placeholderTextColor="#000"
                onChangeText={Tenant_mob => this.setState({ Tenant_mob })}
                value={this.state.Tenant_mob}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>
                Tenant Person Working/Business Address
              </Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="#000"
                onChangeText={Tenant => this.setState({ Tenant })}
                value={this.state.Tenant}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Tenant Permenant Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Address"
                placeholderTextColor="#000"
                onChangeText={Tenant_permanant_add =>
                  this.setState({ Tenant_permanant_add })
                }
                value={this.state.Tenant_permanant_add}
              />
            </View>
            <Text style={styles.text}>Reference Of Person-1</Text>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Full name"
                placeholderTextColor="#000"
                onChangeText={Reference1 => this.setState({ Reference1 })}
                value={this.state.Reference1}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Contact Number </Text>
              <TextInput
                style={styles.input}
                numeric
                placeholder="Mobile"
                placeholderTextColor="#000"
                onChangeText={Mobile1 => this.setState({ Mobile1 })}
                value={this.state.Mobile1}
              />
            </View>

            <Text style={styles.text}>Reference Of Person-2</Text>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Full name"
                placeholderTextColor="#000"
                onChangeText={Reference2 => this.setState({ Reference2 })}
                value={this.state.Reference2}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Contact Number </Text>
              <TextInput
                style={styles.input}
                numeric
                placeholder="Mobile"
                placeholderTextColor="#000"
                onChangeText={Mobile2 => this.setState({ Mobile2 })}
                value={this.state.Mobile2}
              />
            </View>

            <View style={styles.entrybox}>
              <Text style={styles.text}>PAN Card Number </Text>
              <TextInput
                style={styles.input}
                placeholder="PAN"
                placeholderTextColor="#000"
                onChangeText={PAN => this.setState({ PAN })}
                value={this.state.PAN}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Voting Card</Text>
              <TextInput
                style={styles.input}
                placeholder="Voting Card"
                placeholderTextColor="#000"
                onChangeText={Voting_card => this.setState({ Voting_card })}
                value={this.state.Voting_card}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Photo Owner</Text>
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

            <View style={styles.entrybox}>
              <Text style={styles.text}>Photo Property Consultant </Text>
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
            <View style={styles.entrybox}>
              <Text style={styles.text}>Photo Tenant</Text>
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
            <Text style={styles.text}>Note:</Text>
            <View>
              <Text>File Should of 5mb.</Text>
              <Text>File should be in .jpg or .png format.</Text>
            </View>

            <View style={{ paddingBottom: 50, paddingTop: 20 }}>
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
    color: "black",
    marginBottom: 20
  },

  entrybox: {
    flex: 1,
    marginHorizontal: 10
  },

  button: {
    backgroundColor: "#1C8ADB",
    borderRadius: 40,
    height: 50,
    marginHorizontal: "10%",
    alignItems: "center",
    justifyContent: "center"
  },
  button1: {
    backgroundColor: "green",
    borderRadius: 20,
    height: 25,
    marginHorizontal: "10%",
    alignItems: "center",
    justifyContent: "center"
  }
});
