import React, { Component } from "react";
import { Platform, StyleSheet, View, Picker } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
export default class MapScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude:28.6336136,
      longitude:77.4474485,
      markers: [
        {
          coordinates: {
            latitude:28.677479,
      longitude:77.43689,
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
        },
        {
          coordinates: {
            latitude: 28.590937,
            longitude: 77.028352
          },
          title: "Dwarka North Police Station (110078)"
        },
        {
          coordinates: {
            latitude: 28.637777,
            longitude: 77.270674
          },
          title: "Jakarpur Police Station (110092)"
        },
        {
          coordinates: {
            latitude: 28.535608,
            longitude: 77.151753
          },
          title: "Basant Kunj North Police Station(110070)"
        },
        {
          coordinates: {
            latitude: 28.535563,
            longitude: 77.151779
          },
          title: "Basant Kunj South Police Station (110070)"
        },
        {
          coordinates: {
            latitude: 28.558268,
            longitude: 77.169068
          },
          title: "Basant Vihar Police Station (110045)"
        },
        {
          coordinates: {
            latitude: 28.599286,
            longitude: 77.124048
          },
          title: "Delhi Cantt Police Station (110010)"
        },
        {
          coordinates: {
            latitude: 28.529866,
            longitude: 77.087397
          },
          title: "Kapashera Police Station (110037)"
        },
        {
          coordinates: {
            latitude: 28.58831,
            longitude: 77.083
          },
          title: "Palam Village Police Station (110045)"
        },
        {
          coordinates: {
            latitude: 28.571072,
            longitude: 77.178814
          },
          title: "R k Puram Police Station (110022)"
        },
        {
          coordinates: {
            latitude: 28.46594,
            longitude: 77.15106
          },
          title: "Sagar Pur Police Station (110045)"
        },
        {
          coordinates: {
            latitude: 28.570773,
            longitude: 77.17856
          },
          title: "South Campus Police Station (110022)"
        },
        {
          coordinates: {
            latitude: 28.631511,
            longitude: 77.098405
          },
          title: "Hari Nagar Police Station (110058)"
        },
        {
          coordinates: {
            latitude: 28.631076,
            longitude: 77.145164
          },
          title: "Indra Puri Police Station (110012)"
        },
        {
          coordinates: {
            latitude: 28.628608,
            longitude: 77.081865
          },
          title: "Janak Puri Police Station (110058)"
        },
        {
          coordinates: {
            latitude: 28.651794,
            longitude: 77.09633
          },
          title: "Khayala Police Station (110027)"
        },
        {
          coordinates: {
            latitude: 28.640035,
            longitude: 77.135522
          },
          title: "Kirti Nagar Police Station (110015)"
        },
        {
          coordinates: {
            latitude: 28.626723,
            longitude: 77.12149
          },
          title: "Maya Puri Police Station(110064)"
        },
        {
          coordinates: {
            latitude: 28.660349,
            longitude: 77.146666
          },
          title: "Moti Nagar Police Station (110015)"
        },
        {
          coordinates: {
            latitude: 28.632933,
            longitude: 77.138624
          },
          title: "Narayana Police Station (110028)"
        },
        {
          coordinates: {
            latitude: 28.67461,
            longitude: 77.131204
          },
          title: "Punjabi Bagh Police Station (110026)"
        },
        {
          coordinates: {
            latitude: 28.651502,
            longitude: 77.120034
          },
          title: "Rajouri Garden Police Station(110027)"
        },
        {
          coordinates: {
            latitude: 28.638825,
            longitude: 77.101813
          },
          title: "Tilak Nagar Police Station (110027)"
        },
        {
          coordinates: {
            latitude: 28.630201,
            longitude: 77.068091
          },
          title: "Vikas Puri Police Station(110018)"

          // to here
        }
      ]
    };
  }
  componentWillMount(){
    
    this._getLocationAsync();
  }
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
    console.log(this.state.latitude,this.state.longitude)
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <Picker
          selectedValue={this.state.language}
          style={{
            height: 500,
            width: 380,
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
            marginBottom: 550
          }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
        >
          <Picker.Item label="Uttar Pradesh" value="Uttar Pradesh" />
        </Picker> */}

        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude:this.state.latitude,
            longitude:this.state.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
        >
          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={marker.coordinates}
              title={marker.title}
              image={require("../../assets/Police.png")}
              style={{ opacity: 1 }}
              
            />
          ))}
           
            <MapView.Marker
              coordinate={{latitude:this.state.latitude,longitude:this.state.longitude}}
              title='User'
              image={require("../../assets/gps.png")}
              style={{ opacity: 1 }}
              
            />
        </MapView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  map: {
    position: "absolute",
    top: 25,
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
