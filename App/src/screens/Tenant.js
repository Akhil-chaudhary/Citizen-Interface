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
import * as ImagePicker from 'expo-image-picker';
import DatePicker from "react-native-datepicker";
import * as firebase from "firebase";
import { Title } from "native-base";
var photo
export default class Tenant extends Component {
  state = {
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
    image:'',
    errorMessage: null
  };

  handleSubmit = () => {
    this.state.image=photo
    firebase
      .database()
      .ref("/Tenant")
      .push(this.state)
  };
  chooseImage = async () => {
    //let result=await ImagePicker.launchCameraAsync();
    let result = await ImagePicker.launchImageLibraryAsync();
    
    // this.setState({ image:blob.data.name })
    if (!result.cancelled) {
      this.uploadImage(result.uri,this.state.Name)
        .then(() => {
          Alert.alert("Success");
        })
        .catch(error => {
          Alert.alert(error);
        });
    }
  };
  uploadImage = async (uri,imageName) => {
    const response = await fetch(uri);
    blob = await response.blob();
    var ref = firebase
      .storage()
      .ref()
      .child("Tenant/" + imageName);
      // firebase
      // .database()
      // .ref("Tenant/")
      // .push({image:blob.data.name});  
      photo=blob.data.name
    return ref.put(blob);
    
  };

  render() {
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
            icon: "home",
            color: "#fff",
            onPress: () => this.props.navigation.navigate("Home")
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
              <Text style={styles.text}> Rental Property Address</Text>
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
              <Text style={styles.text}> Contact number</Text>
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
            <View style={styles.entrybox}>
              <Text style={styles.text}>Reference Of Person-1 Name</Text>
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

            <View style={styles.entrybox}>
              <Text style={styles.text}>Reference Of Person-2 Name</Text>
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
                <Text>Upload</Text>
              </TouchableOpacity>
            </View>
            {/*
            <View style={styles.entrybox}>
              <Text style={styles.text}>Photo Property Consultant </Text>
              <TextInput
                style={styles.input}
                placeholder="Full name"
                placeholderTextColor="#000"
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Photo Tenant</Text>
              <TextInput
                style={styles.input}
                placeholder="Full name"
                placeholderTextColor="#000"
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
              />
            </View>
            <Text style={styles.text}>Note:</Text>
            <View>
              <Text>File Should of 5mb.</Text>
              <Text>File should bepng,jpg.</Text>
            </View>
            <View style={{ paddingBottom: 50 }}>
              <TouchableOpacity
                style={styles.button1}
                title="Upload Photo"
                value="Upload"
                onPress={this.handleupload}
              >
                <Text
                  style={{ color: "#FFF", fontWeight: "200", fontSize: 12 }}
                >
                  Upload
                </Text>
              </TouchableOpacity>
            </View> */}

            <View style={{ paddingBottom: 50 }}>
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
