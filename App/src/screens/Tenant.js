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
  ImageBackgroundComponent
} from "react-native";
import { Header } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Tenant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      fname: "",
      email: "",
      address: "",
      mobile: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target });
  }

  handleSubmit(event) {
    alert("Save the Form  !");
    event.preventDefault();
  }
  state = {
    yes: true,
    no: false
  };

  render() {
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
            icon: "close",
            color: "#fff",
            onPress: () => this.props.navigation.navigate("Form")
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
                placeholder="Full Name"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Current Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Address"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>

            <View style={styles.entrybox}>
              <Text style={styles.text}>Current Number</Text>
              <TextInput
                numeric
                style={styles.input}
                placeholder="Number"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}> Rental PropertyAddress</Text>
              <TextInput
                style={styles.input}
                placeholder="Address"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>
                {" "}
                Property For Rental Residentai/Commerical
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Address"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <Text style={styles.text}> Tenant information</Text>

            <View style={styles.entrybox}>
              <Text style={styles.text}> Tenant Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Date Of Birth</Text>
              <TextInput
                style={styles.input}
                placeholder="dd/mm/yy"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}> Contact number</Text>
              <TextInput
                style={styles.input}
                placeholder="Number"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>
                Tenant Person Working/Business Address
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Address"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Tenant Permenant Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Address"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Reference Of Person-1 Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Reference Name"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Contact Number </Text>
              <TextInput
                numeric
                style={styles.input}
                placeholder="Refernce Contact Number"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>

            <View style={styles.entrybox}>
              <Text style={styles.text}>Reference Of Person-2 Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Reference Name"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Contact Number </Text>
              <TextInput
                numeric
                style={styles.input}
                placeholder="Refernce Contact Number"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Rental Property Given By Whom </Text>
              <TextInput
                style={styles.input}
                placeholder="Owner Name"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>

            <Text>Tenant Permenant Address </Text>

            <View style={styles.entrybox}>
              <Text style={styles.text}>PAN Card Number </Text>
              <TextInput
                style={styles.input}
                placeholder="PAN Card"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Voting Card</Text>
              <TextInput
                style={styles.input}
                placeholder="Voting Card "
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Photo Owner</Text>
              <TextInput
                style={styles.input}
                placeholder="Owner"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Photo Property Consultant </Text>
              <TextInput
                style={styles.input}
                placeholder="consultant"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Photo Tenant</Text>
              <TextInput
                style={styles.input}
                placeholder="Tenant"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
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
            </View>

            <View style={{ paddingBottom: 50 }}>
              <TouchableOpacity
                style={styles.button}
                title="continue Form"
                value="continue"
                onPress={this.handleSubmit}
              >
                <Text
                  style={{ color: "#FFF", fontWeight: "400", fontSize: 22 }}
                >
                  Continue
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
