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
  Alert
} from "react-native";
import { Header } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dropdown } from "react-native-material-dropdown";
import DatePicker from "react-native-datepicker";
import * as firebase from "firebase";
let States = [];
let District = [];
let station = [];
let User = [];
export default class Complaint extends Component {
  state = {
    Name: "",
    Father_name: "",
    Address: "",
    Mobile: "",
    Email: "",
    Nature: "",
    Station: "",
    State: "",
    District: "",
    DOB: "",
    Date_incident: "",
    Complaint_against: "",
    Complaint_Address: "",
    Description: "",
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
    firebase
      .database()
      .ref("/Complaints")
      .push(this.state)
      .then(this.props.navigation.navigate("FIR"));
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
  render() {
    this.fetchDataUser();
    this.fetchDataDistrict();
    this.fetchDataStation();
    // this._getLocationAsync();

    let data = [
      {
        value: "Against the organization"
      },
      {
        value: "Anti people"
      },
      {
        value: "Against police officer"
      },
      {
        value: "Against public servant (Civil)"
      },
      {
        value: "Wildlife Case"
      },
      {
        value: "Army against paramilitary"
      },
      {
        value: "Against foreigners"
      },
      {
        value: "Against the department"
      },
      {
        value: "Illegal possession dispute"
      },
      {
        value: "Ownership dispute"
      },
      {
        value: "Dispute of route blocking"
      },
      {
        value: "Drain and check dispute"
      },
      {
        value: "House partition dispute"
      },
      {
        value: "Landlord / tenant dispute"
      },
      {
        value: "Marital dispute"
      },
      {
        value: "Other crimes against women"
      },
      {
        value: "Commutation of crime"
      },
      {
        value: "Corruption complaint"
      },
      {
        value: "Deliberation dysfunction"
      },
      {
        value: "Complaint of partisan"
      },
      {
        value: "Commutation of crime"
      },
      {
        value: "Physical crime - beating, abusing"
      },
      {
        value: "Cashier"
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
            onPress: () => this.props.navigation.navigate("FIR")
          }}
          centerComponent={{
            text: "E-Complaint",
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
                "INFO",
                "Technology has opened up gates and given us an opportunity to file complaints and FIRs online, without having to physically go to the police station. It is a hassle-free, easy process, where your complaint is registered within a few clicks. The tedious task has been made easy with the wave of technological invasions. Now all your grievances can be complained against by simply filing the complaint or FIR online. However, this process is not available for all states. But some states have simplified the process by taking it up online.\n\nFAQs:\n\n\u2022What is a complaint and who can file it?\nA complaint is one where you want to report the commission or omission of an act which is an offence under the law for the time being in force.\nTherefore, any allegation made against any individual person, organization, state-authority would be a complaint. In ordinary circumstances, not all complaints need to be written, a complaint can either be oral or written.\n\n\u2022Now the question arises as to who can file a complaint?\nhe law in our country does not necessarily require us to be the victims of an incident to file a case. This means FIRs can either be lodged by the person who is a victim or the aggrieved due to a particular incident. Alternatively, an FIR can also be filed by a person who is not directly involved in the commission of an offence, nor is affected by it, but has witnessed it. Therefore, merely a witness to the commission of an offence has the locus standi to file a complaint, even if the actual victim does not.\n\n\u2022Should you file an FIR or a criminal complaint? \nFIR means First Information Report. FIR is a written document usually used by the countries of India, Pakistan and Bangladesh. The basic difference between filing an FIR and filing a criminal complaint is that the commission of cognizable offences like murder, rape, dowry death, kidnapping and e-FIR can be preferred. However, when the nature of the offence is such that it is non-cognizable in nature (like assault, cheating, stalking, etc.), then a criminal complaint should be filed. It will be later converted into an FIR after the Magistrate orders so. People can file the complaint through the online medium too. Therefore, the e-FIR is available.\n"
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
                autoCapitalize="words"
                autoCompleteType="name"
                placeholderTextColor="#000"
                onChangeText={Name => this.setState({ Name })}
                value={this.state.Name}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Father's name</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="words"
                autoCompleteType="name"
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
                keyboardType="phone-pad"
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
                autoCompleteType="email"
                placeholderTextColor="#000"
                onChangeText={Email => this.setState({ Email })}
                value={this.state.Email}
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
              <Text style={styles.text}>Nature of complaint</Text>
              <Dropdown
                style={styles.drop}
                onChangeText={Nature => this.setState({ Nature })}
                value={this.state.Nature}
                baseColor="#1C8ADB"
                data={data}
              />
            </View>
            <Text style={styles.text}>Complaint Against</Text>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#000"
                onChangeText={Complaint_against =>
                  this.setState({ Complaint_against })
                }
                value={this.state.Complaint_against}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Address"
                multiline
                placeholderTextColor="#000"
                onChangeText={Complaint_Address =>
                  this.setState({ Complaint_Address })
                }
                value={this.state.Complaint_Address}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Date Of Incident</Text>
              <DatePicker
                style={{ width: 200, backgroundColor: "#1C8ADB" }}
                date={this.state.Date_incident}
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
                onDateChange={Date_incident => {
                  this.setState({ Date_incident });
                }}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Description</Text>
              <TextInput
                style={styles.input}
                multiline
                placeholder="Description"
                placeholderTextColor="#000"
                onChangeText={Description => this.setState({ Description })}
                value={this.state.Description}
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
