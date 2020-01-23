import React, { Component } from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { Header } from "react-native-elements";

export default class Form extends Component {
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
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Header
          leftComponent={{
            icon: "menu",
            color: "#1C8ADB",
            onPress: () => alert("Menu")
          }}
          centerComponent={{
            text: "Form",
            style: {
              color: "#1C8ADB",
              fontWeight: "bold",
              fontSize: 22,
              letterSpacing: 3
            }
          }}
          rightComponent={{
            icon: "lock",
            color: "#1C8ADB",
            onPress: () => this.props.navigation.navigate("Login")
          }}
          backgroundColor="#fff"
        />
        <ScrollView>
          <View>
            <Text style={styles.text}> Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={this.handleChange}
              value={this.state.value}
            />
          </View>

          <View>
            <Text style={styles.text}>Father's Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Father_Name"
              onChangeText={this.handleChange}
              value={this.state.value}
            />
          </View>
          <View style={styles.text}>
            <Text style={styles.text}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Address"
              onChangeText={this.handleChange}
              value={this.state.value}
            />
          </View>
          <View>
            <Text style={styles.text}>Mobile'Number</Text>
            <TextInput
              numeric
              style={styles.input}
              placeholder="Mobile"
              onChangeText={this.handleChange}
              value={this.state.value}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={this.handleChange}
              value={this.state.value}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <Text style={styles.text}>Lost Item</Text>
            <TextInput
              style={styles.input}
              placeholder="LostItem"
              onChangeText={this.handleChange}
              value={this.state.value}
            />
          </View>

          <Text style={styles.text}>Place of Lost</Text>
          <TextInput
            style={styles.input}
            placeholder="Place of lost"
            onChangeText={this.handleChange}
            value={this.state.value}
          />

          <View>
            <Text style={styles.text}>Date of Lost </Text>
            <View style={styles.split}>
              <View style={{ flex: 1, marginRight: 5 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Month"
                  onChangeText={this.handleChange}
                  value={this.state.value}
                />
              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Day"
                  onChangeText={this.handleChange}
                  value={this.state.value}
                />
              </View>
            </View>
          </View>

          <View style={styles.button}>
            <Button
              title="Submit Form"
              value="ubmit"
              onPress={this.handleSubmit}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    paddingTop: 50
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 15,
    alignSelf: "stretch"
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
    color: "#41cdf4",
    fontSize: 22
  },
  button: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20
  }
});
