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

export default class LostFIR extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      fname: "",
      email: "",
      address: "",
      lDate: "",
      litem: "",
      mobile: "",
      plost: ""
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

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <Header
          leftComponent={{
            icon: "home",
            color: "#fff",
            onPress: () => this.props.navigation.navigate("Home")
          }}
          centerComponent={{
            text: "FORM",
            style: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: 22,
              letterSpacing: 3
            }
          }}
          rightComponent={{
            icon: "close",
            color: "#fff",
            onPress: () => this.props.navigation.navigate("Home")
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
              <Text style={styles.text}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>

            <View style={styles.entrybox}>
              <Text style={styles.text}>Father's Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Father`s Name"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Address"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Mobile Number</Text>
              <TextInput
                numeric
                style={styles.input}
                placeholder="Mobile Number"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Lost Item</Text>
              <TextInput
                style={styles.input}
                placeholder="Lost Item"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Place of Lost</Text>
              <TextInput
                style={styles.input}
                placeholder="Place of lost"
                placeholderTextColor="#000"
                onChangeText={this.handleChange}
                value={this.state.value}
              />
            </View>
            <View style={styles.entrybox}>
              <Text style={styles.text}>Date of Lost </Text>
              <View style={styles.split}>
                <View style={{ flex: 1, marginRight: 7 }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Day"
                    placeholderTextColor="#000"
                    onChangeText={this.handleChange}
                    value={this.state.value}
                  />
                </View>
                <View style={{ flex: 1, marginLeft: 7 }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Month"
                    placeholderTextColor="#000"
                    onChangeText={this.handleChange}
                    value={this.state.value}
                  />
                </View>
              </View>
            </View>

            <View style={{ paddingBottom: 100 }}>
              <TouchableOpacity
                style={styles.button}
                title="Submit Form"
                value="Submit"
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
  }
});
