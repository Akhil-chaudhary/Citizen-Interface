import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ImageBackground
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";

import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

export default class RegisterScreen extends Component {
  state = {
    name: "",
    email: "",
    aadhar: "",
    number: "",
    password: "",
    token: "",
    errorMessage: null
  };

  /////----------------------------SIGNUP FUNCTION============================///
  handleSignUp = () => {
    this.state.email = this.state.email.trim();
    this.state.name = this.state.name.trim();
    this.state.aadhar = this.state.aadhar.trim();
    this.state.number = this.state.number.trim();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name
        });
      }).catch(error => this.setState({ errorMessage: error.message }));
      

    //TO SAVE THE DATA OF THE USERS INTO THE DATABASE/------------

    firebase
      .database()
      .ref("Citizen Users/")
      .child(this.state.email.replace(".", "@"))
      .set({
        name: this.state.name,
        email: this.state.email,
        aadhar: this.state.aadhar,
        number: this.state.number,
        push_token: this.state.token
      })
  };

  ////---------------------------PUSH NOTIFICATION FUNCTION...........................\\\\

  registerForPushNotificationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    // only asks if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    // On Android, permissions are granted on app installation, so
    // askAsync will never prompt the user

    // Stop here if the user did not grant permissions
    if (status !== "granted") {
      alert("No notification permissions!");
      return;
    }

    try {
      // Get the token that identifies this device
      this.state.token = await Notifications.getExpoPushTokenAsync();
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    this.currentUser = await firebase.auth().currentUser;

    await this.registerForPushNotificationAsync();
  }

  render() {
    return (
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <Image
            style={{ width: 180, height: 180 }}
            source={require("../../assets/Register.png")}
          />
          <Text style={styles.greeting}>Citizen Register</Text>
          <View style={styles.errorMessage}>
            {this.state.errorMessage && (
              <Text style={styles.error}> {this.state.errorMessage} </Text>
            )}
          </View>

          <View style={styles.form}>
            <View>
              <TextInput
                placeholder="Full Name"
                placeholderTextColor="#000"
                style={styles.input}
                autoCapitalize="words"
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
              ></TextInput>
            </View>

            <View style={{ marginTop: 4 }}>
              <TextInput
                placeholder="Email Address"
                autoCompleteType="email"
                placeholderTextColor="#000"
                style={styles.input}
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              ></TextInput>
            </View>

            <View style={{ marginTop: 4 }}>
              <TextInput
                placeholder="Aadhar Card Number"
                style={styles.input}
                keyboardType='number-pad'
                placeholderTextColor="#000"
                autoCapitalize="none"
                onChangeText={aadhar => this.setState({ aadhar })}
                value={this.state.aadhar}
              ></TextInput>
            </View>
            <View style={{ marginTop: 4 }}>
              <TextInput
                placeholder="Mobile Number"
                style={styles.input}
                keyboardType='phone-pad'
                placeholderTextColor="#000"
                autoCapitalize="none"
                onChangeText={number => this.setState({ number })}
                value={this.state.number}
              ></TextInput>
            </View>

            <View style={{ marginTop: 4 }}>
              <TextInput
                placeholder="Password"
                autoCompleteType="password"
                placeholderTextColor="#000"
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              ></TextInput>
            </View>

            <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
              <Text style={{ color: "#FFF", }}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ alignSelf: "center", marginTop: 4 }}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={{ color: "#414959", fontSize: 15 }}>
                Already Registered?<Text style={styles.signup}> Log In</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: "7%"
  },
  greeting: {
    marginTop: 32,
    fontSize: 28,
    
    textAlign: "center"
  },
  errorMessage: {
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  form: {
    marginBottom: 60,
    marginHorizontal: 103
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: 2,
    height: 40,
    fontSize: 20,
    color: "#161F3D",
    marginBottom: 20
  },
  button: {
    backgroundColor: "#1C8ADB",
    borderRadius: 20,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  signup: {
    
    color: "#1C8ADB"
  },
  error: {
    color: "#ff0000",
    fontSize: 15,
    
    textAlign: "center"
  }
});
