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

export default class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: null
  };

  handleLogin = () => {
    this.state.email = this.state.email.trim();
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({ errorMessage: error.message }));
  };

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
            source={require("../../assets/User.png")}
          />
          <Text style={styles.greeting}>Citizen Login</Text>
          <View style={styles.errorBox}>
            {this.state.errorMessage && (
              <Text style={styles.error}> {this.state.errorMessage} </Text>
            )}
          </View>

          <View style={styles.form}>
            <View>
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

            <View style={{ marginTop: 32 }}>
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

            <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
              <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              rounded
              style={{ alignSelf: "center", marginTop: 32 }}
              onPress={() => this.props.navigation.navigate("Register")}
            >
              <Text style={{ color: "#414959", fontSize: 15 }}>
                New to NCRB App?<Text style={styles.signup}> Sign Up</Text>
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
    marginBottom: 32,
    fontSize: 28,
    fontWeight: "bold",
    fontWeight: "400",
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
    fontWeight: "600",
    color: "#1C8ADB"
  },
  error: {
    color: "#ff0000",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center"
  }
});
