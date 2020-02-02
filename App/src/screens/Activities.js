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
  Image,
  FlatList,
  Alert
} from "react-native";
import { Header } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dropdown } from "react-native-material-dropdown";
import * as firebase from "firebase";
let User=[];
export default class Activities extends Component {
    state={
        data:[],
    }
  componentWillMount() {
    this.fetchDataUser();
  }
  fetchDataUser = () => {
    var fireBaseResponse = firebase
      .database()
      .ref()
      .child("Clearance");
    fireBaseResponse.once("value").then(snapshot => {
      snapshot.forEach(child => {
          temp=child.val()
          User.push(temp);
        return false;
      });

      this.setState({data:User});
    //   console.log(this.state.data);
    });
  };

  render() {
    // delete this.state.data[0];
    console.log(this.state.data.Object);
    // const tmp=this.state.data.map((dat)=>{
    //     return (
    //         <FlatList data={dat}
    //       renderItem={
    //         ({item}) => 
    //         <View >
    //           <Text>
    //             {item.Name}
    //           </Text>
    //         </View>
    //         }
    //       /> 
    //     )
    //   });
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
            text: "History",
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
                "Here you can easily see your past form entries and activities.\n"
              )
          }}
          backgroundColor="#1C8ADB"
        />
        {/* {tmp} */}
        {/*
        <FlatList data={this.state.data[0]}
          renderItem={
            ({item}) => 
            <View >
              <Text>
                {item.Name}
              </Text>
            </View>
            }
          /> 
          <View style={styles.container}>
          <ScrollView>
             <View style={styles.titleWrapper}>
              <Image
                style={{ width: 150, height: 150 }}
                source={require("../../assets/logo.png")}
              />
            </View> 
            <TouchableOpacity>
              <View style={styles.tab}>
        <Text style={styles.item}>{this.state.data.Name}</Text>
              </View>
            </TouchableOpacity>
            </ScrollView>
        </View>*/}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  split: {
    flexDirection: "row"
  },
  error: {
    position: "absolute",
    bottom: 0,
    color: "red",
    fontSize: 12
  },
  img: {
    position: "absolute",
    right: 10,
    bottom: 10,
    alignItems: "center",
    height: 50,
    width: 50
  },
  item: {
    alignItems: "center",
    fontSize: 20
  },
  tab: {
    flexDirection: "row",
    marginTop: 14,
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 5
  },
  // map: {
  //   padding: 100,
  //   justifyContent: "flex-end",
  //   alignItems: "center"
  // },
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  titleWrapper: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  txtInput: {
    flex: 1
  },
  listItemContainer: {
    margin: 5,
    borderRadius: 5
  },
  listItem: {
    marginTop: 300,
    color: "black",
    fontSize: 20,
    padding: 10
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
