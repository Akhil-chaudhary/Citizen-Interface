import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

import { requestPermissionAsync } from "expo-location";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

///-----------------------Location Fetch-----------------------
//   componentDidMount() {
//     this._getLocationAsync();
//   }

const Map = () => {
    
 global.latitude;
  global.longitude;
  this.getLocationAsync();

//   console.log(longitude, latitude);
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude:  global.latitude,
        longitude:  global.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    ></MapView>
  );
};

// let latitude, longitude;
getLocationAsync = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== "granted") {
    this.setState({
      locationResult: "Permission to access location was denied"
    });
  }

  let location = await Location.getCurrentPositionAsync({});
  global.latitude = location.coords.latitude;
  global.longitude = location.coords.longitude;
  console.log( global.longitude,  global.latitude);
};
//-------------------------------Location taken--------------------------
const styles = StyleSheet.create({
  map: {
    height: 300,
    margin: 20
  }
});

export default Map;
