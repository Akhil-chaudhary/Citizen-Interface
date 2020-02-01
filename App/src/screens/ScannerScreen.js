import React, { Component, version } from "react";
import { Platform, StyleSheet, View, Picker, SafeAreaView } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
// var lati,longi;
export default class MapScreen extends Component {
  componentWillMount() {
    this._getLocationAsync();
  }
  constructor(props) {
    super(props);

    this.state = {
      lati:null,
      longi:null,
      markers: [
        {
          coordinates: {
            latitude: 28.677479,
            longitude: 77.43689
          },
          title: "Mahila Thana Police Station (201001)"
        },

        {
          coordinates: {
            latitude: 28.670746,
            longitude: 77.436743
          },
          title: "Sihani Gate Police Station (201001)"
        },

        {
          coordinates: {
            latitude: 28.67129,
            longitude: 77.455397
          },
          title: "Kavi Nagar Police Station (201002)"
        },
        {
          coordinates: {
            latitude: 28.65823,
            longitude: 77.429707
          },
          title: "Kotwali Police Station (201009) "

          // generate database from here
        },
        {
          coordinates: {
            latitude: 28.646459,
            longitude: 77.422134
          },
          title: "Vijay Nagar Police Station (201009)"
        },
        {
          coordinates: {
            latitude: 28.643777,
            longitude: 77.37187
          },
          title: "Indrapuram Police Station (201014)"
        },
        {
          coordinates: {
            latitude: 28.631855,
            longitude: 77.35493
          },
          title: "Khoda Makanpur Police Station (201014)"
        },
        {
          coordinates: {
            latitude: 28.671094,
            longitude: 77.361261
          },
          title: "Link Road Police Station (201010)"
        },
        {
          coordinates: {
            latitude: 28.678673,
            longitude: 77.371736
          },
          title: "Sahibabad Police Station (201007)"
        },
        {
          coordinates: {
            latitude: 28.754116,
            longitude: 77.28581
          },
          title: "Loni Police Station (201102)"
        },
        {
          coordinates: {
            latitude: 28.710399,
            longitude: 77.291029
          },
          title: "Loni Border Police Station (201102)"
        },
        {
          coordinates: {
            latitude: 28.781834,
            longitude: 77.277501
          },
          title: "Tronica city Police Station (201102)"
        },
        {
          coordinates: {
            latitude: 28.76072,
            longitude: 77.502177
          },
          title: "Muradanagar Police Station (201206)"
        },
        {
          coordinates: {
            latitude: 28.829857,
            longitude: 77.570289
          },
          title: "Modinagar Police Station (201204)"
        },
        {
          coordinates: {
            latitude: 28.689695,
            longitude: 77.554652
          },
          title: "Mussoori Police Station (201015)"
        },
        {
          coordinates: {
            latitude: 28.799749,
            longitude: 77.620721
          },
          title: "Bhojpur Police Station (201204)"
        },
        {
          coordinates: {
            latitude: 28.630129,
            longitude: 77.433772
          },
          title: "Crossing Republik Police Station (201009)"

          // to here
        }
      ]
    };
  }

  // ///-----------------------Location Fetch-----------------------
  
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({
    lati : location.coords.latitude,
    longi :location.coords.longitude
    })
    // lati = location.coords.latitude;
    // longi = location.coords.longitude;
    console.log(this.state.longi, this.state.lati);
  };
  //-------------------------------Location taken--------------------------
  
  render() {
    
    return (
      
      <View style={styles.container}>
        <SafeAreaView
          style={{
            backgroundColor: "white",
            marginTop: 40,
            marginHorizontal: 15,
            borderRadius: 7,
            alignItems: "center"
          }}
        >
          <Picker
            selectedValue={this.state.language}
            style={{
              width: 350,
              flexDirection: "column",
              justifyContent: "flex-start"
            }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }
          >
            <Picker.Item label="Uttar Pradesh" value="Uttar Pradesh" />
          </Picker>
        </SafeAreaView>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude:this.state.lati,
            longitude: this.state.longi,
            latitudeDelta: 0.4,
            longitudeDelta: 0.4
          }}
        >
          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={marker.coordinates}
              title={marker.title}
              image={require("../../assets/PoliceStationIcon.png")}
              style={{ opacity: 1 }}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: "#F5FCFF"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1
  }
});

/*const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 700,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
}); */
