import React, { Component } from "react";
import { Platform, StyleSheet, View, Picker } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class HeatMapScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [
        {
          coordinates: {
            latitude: 3.148561,
            longitude: 101.652778
          }
        },

        {
          coordinates: {
            latitude: 3.149771,
            longitude: 101.655449
          }
        },

        {
          coordinates: {
            latitude: 4.149888,
            longitude: 121.655449
          }
        },
        {
          coordinates: {
            latitude: 5.14982,
            longitude: 131.652249
          }

          // generate database from here
        },
        {
          coordinates: {
            latitude: 27.109438,
            longitude: 80.517786
          }
        },
        {
          coordinates: {
            latitude: 25.953424,
            longitude: 80.625813
          }
        },
        {
          coordinates: {
            latitude: 26.281308,
            longitude: 79.756649
          }
        },
        {
          coordinates: {
            latitude: 27.788245,
            longitude: 81.316841
          }
        },
        {
          coordinates: {
            latitude: 27.655331,
            longitude: 82.358606
          }
        },
        {
          coordinates: {
            latitude: 27.782226,
            longitude: 79.724244
          }
        },
        {
          coordinates: {
            latitude: 26.069584,
            longitude: 81.851098
          }
        },
        {
          coordinates: {
            latitude: 27.684129,
            longitude: 82.572085
          }
        },
        {
          coordinates: {
            latitude: 26.19511,
            longitude: 79.410159
          }
        },
        {
          coordinates: {
            latitude: 26.473158,
            longitude: 80.418802
          }
        },
        {
          coordinates: {
            latitude: 27.527478,
            longitude: 81.584477
          }
        },
        {
          coordinates: {
            latitude: 26.168752,
            longitude: 80.132988
          }
        },
        {
          coordinates: {
            latitude: 26.909236,
            longitude: 80.073481
          }
        },
        {
          coordinates: {
            latitude: 26.907956,
            longitude: 82.208372
          }
        },
        {
          coordinates: {
            latitude: 27.415258,
            longitude: 81.07389
          }
        },
        {
          coordinates: {
            latitude: 27.191275,
            longitude: 80.282462
          }
        },
        {
          coordinates: {
            latitude: 25.619372,
            longitude: 81.846841
          }
        },
        {
          coordinates: {
            latitude: 26.331044,
            longitude: 81.478985
          }
        },
        {
          coordinates: {
            latitude: 25.58157,
            longitude: 79.84381
          }
        },
        {
          coordinates: {
            latitude: 27.042914,
            longitude: 80.192645
          }
        },
        {
          coordinates: {
            latitude: 27.567156,
            longitude: 81.69917
          }
        },
        {
          coordinates: {
            latitude: 27.731628,
            longitude: 80.544238
          }
        },
        {
          coordinates: {
            latitude: 26.950646,
            longitude: 82.333645
          }
        },
        {
          coordinates: {
            latitude: 25.794259,
            longitude: 81.910312
          }
        },
        {
          coordinates: {
            latitude: 27.395401,
            longitude: 79.615344
          }
        },
        {
          coordinates: {
            latitude: 24.984184,
            longitude: 81.05769
          }
        },
        {
          coordinates: {
            latitude: 27.343273,
            longitude: 80.791155
          }
        },
        {
          coordinates: {
            latitude: 26.231734,
            longitude: 82.224014
          }
        },
        {
          coordinates: {
            latitude: 25.547402,
            longitude: 80.519684
          }
        },
        {
          coordinates: {
            latitude: 26.134404,
            longitude: 79.377968
          }
        },
        {
          coordinates: {
            latitude: 27.565702,
            longitude: 81.223062
          }
        },
        {
          coordinates: {
            latitude: 25.471728,
            longitude: 81.043431
          }
        },
        {
          coordinates: {
            latitude: 26.677712,
            longitude: 82.513718
          }
        },
        {
          coordinates: {
            latitude: 25.666999,
            longitude: 80.896633
          }
        },
        {
          coordinates: {
            latitude: 27.575134,
            longitude: 82.001931
          }
        },
        {
          coordinates: {
            latitude: 25.538274,
            longitude: 79.603638
          }
        },
        {
          coordinates: {
            latitude: 26.166673,
            longitude: 79.289927
          }
        },
        {
          coordinates: {
            latitude: 26.262742,
            longitude: 82.381607
          }
        },
        {
          coordinates: {
            latitude: 26.519245,
            longitude: 79.826788
          }
        },
        {
          coordinates: {
            latitude: 25.16723,
            longitude: 80.897601
          }
        },
        {
          coordinates: {
            latitude: 28.408237,
            longitude: 79.041753
          }
        },
        {
          coordinates: {
            latitude: 27.670541,
            longitude: 79.357
          }
        },
        {
          coordinates: {
            latitude: 28.745615,
            longitude: 78.259957
          }
        },
        {
          coordinates: {
            latitude: 27.554041,
            longitude: 78.672046
          }
        },
        {
          coordinates: {
            latitude: 27.311942,
            longitude: 80.042257
          }
        },
        {
          coordinates: {
            latitude: 28.911373,
            longitude: 77.272315
          }
        },
        {
          coordinates: {
            latitude: 28.073215,
            longitude: 78.939282
          }
        },
        {
          coordinates: {
            latitude: 27.769479,
            longitude: 79.768087
          }
        },
        {
          coordinates: {
            latitude: 28.681798,
            longitude: 79.907295
          }
        },
        {
          coordinates: {
            latitude: 28.929645,
            longitude: 77.640112
          }
        },
        {
          coordinates: {
            latitude: 27.445825,
            longitude: 78.664596
          }
        },
        {
          coordinates: {
            latitude: 28.369234,
            longitude: 77.132792
          }
        },
        {
          coordinates: {
            latitude: 27.723304,
            longitude: 78.454029
          }
        },
        {
          coordinates: {
            latitude: 28.755584,
            longitude: 77.417571
          }
        },
        {
          coordinates: {
            latitude: 28.066812,
            longitude: 79.158843
          }
        },
        {
          coordinates: {
            latitude: 28.498294,
            longitude: 77.64727
          }
        },
        {
          coordinates: {
            latitude: 28.882485,
            longitude: 80.860677
          }
        },
        {
          coordinates: {
            latitude: 27.539621,
            longitude: 77.877842
          }
        },
        {
          coordinates: {
            latitude: 28.41915,
            longitude: 78.424986
          }
        },
        {
          coordinates: {
            latitude: 27.047873,
            longitude: 79.814627
          }
        },
        {
          coordinates: {
            latitude: 28.934683,
            longitude: 80.451863
          }
        },
        {
          coordinates: {
            latitude: 28.419755,
            longitude: 78.779019
          }
        },
        {
          coordinates: {
            latitude: 28.724235,
            longitude: 77.35253
          }
        },
        {
          coordinates: {
            latitude: 28.600516,
            longitude: 80.622782
          }
        },
        {
          coordinates: {
            latitude: 28.646656,
            longitude: 79.307887
          }
        },
        {
          coordinates: {
            latitude: 26.994166,
            longitude: 77.127489
          }
        },
        {
          coordinates: {
            latitude: 28.912188,
            longitude: 77.464707
          }
        },
        {
          coordinates: {
            latitude: 28.068958,
            longitude: 77.258905
          }
        },
        {
          coordinates: {
            latitude: 26.822879,
            longitude: 80.894805
          }
        },
        {
          coordinates: {
            latitude: 28.437982,
            longitude: 79.684974
          }
        },
        {
          coordinates: {
            latitude: 27.603972,
            longitude: 77.742046
          }
        },
        {
          coordinates: {
            latitude: 28.122584,
            longitude: 79.30109
          }
        },
        {
          coordinates: {
            latitude: 28.566583,
            longitude: 80.157176
          }
        },
        {
          coordinates: {
            latitude: 28.110959,
            longitude: 78.218776
          }
        },
        {
          coordinates: {
            latitude: 27.229451,
            longitude: 79.642417
          }
        },
        {
          coordinates: {
            latitude: 27.417874,
            longitude: 78.702054
          }
        },
        {
          coordinates: {
            latitude: 28.202405,
            longitude: 79.61846
          }
        },
        {
          coordinates: {
            latitude: 28.329838,
            longitude: 77.115252
          }
        },
        {
          coordinates: {
            latitude: 27.832487,
            longitude: 77.713592
          }
        },
        {
          coordinates: {
            latitude: 28.64566,
            longitude: 79.939827
          }
        },
        {
          coordinates: {
            latitude: 28.821404,
            longitude: 77.189683
          }
        },
        {
          coordinates: {
            latitude: 27.906318,
            longitude: 78.021845
          }
        },
        {
          coordinates: {
            latitude: 28.961939,
            longitude: 79.420868
          }
        },
        {
          coordinates: {
            latitude: 26.999452,
            longitude: 79.47121
          }
        },
        {
          coordinates: {
            latitude: 27.131038,
            longitude: 77.906383
          }
        },
        {
          coordinates: {
            latitude: 27.008324,
            longitude: 79.481536
          }
        },
        {
          coordinates: {
            latitude: 28.94422,
            longitude: 79.518141
          }
        },
        {
          coordinates: {
            latitude: 28.199199,
            longitude: 79.819512
          }
        },
        {
          coordinates: {
            latitude: 27.913487,
            longitude: 80.982713
          }
        },
        {
          coordinates: {
            latitude: 26.863582,
            longitude: 77.584157
          }
        },
        {
          coordinates: {
            latitude: 27.828152,
            longitude: 78.368871
          }
        },
        {
          coordinates: {
            latitude: 27.529772,
            longitude: 78.284027
          }
        },
        {
          coordinates: {
            latitude: 28.940592,
            longitude: 79.477451
          }
        },
        {
          coordinates: {
            latitude: 28.158463,
            longitude: 80.576733
          }
        },
        {
          coordinates: {
            latitude: 28.562643,
            longitude: 79.626705
          }
        },
        {
          coordinates: {
            latitude: 28.65059,
            longitude: 78.616935
          }
        },
        {
          coordinates: {
            latitude: 28.865168,
            longitude: 78.050973
          }
        },
        {
          coordinates: {
            latitude: 28.674646,
            longitude: 80.930899
          }
        },
        {
          coordinates: {
            latitude: 28.392379,
            longitude: 80.400184
          }
        },
        {
          coordinates: {
            latitude: 27.089593,
            longitude: 79.659059
          }
        },
        {
          coordinates: {
            latitude: 27.002003,
            longitude: 77.616981
          }
        },
        {
          coordinates: {
            latitude: 27.578306,
            longitude: 78.265335
          }
        },
        {
          coordinates: {
            latitude: 27.737312,
            longitude: 79.009501
          }
        },
        {
          coordinates: {
            latitude: 27.074993,
            longitude: 78.29051
          }
        },
        {
          coordinates: {
            latitude: 27.825089,
            longitude: 77.502711
          }
        },
        {
          coordinates: {
            latitude: 27.533211,
            longitude: 79.505846
          }
        },
        {
          coordinates: {
            latitude: 27.68723,
            longitude: 77.750316
          }
        },
        {
          coordinates: {
            latitude: 27.683391,
            longitude: 77.905568
          }
        },
        {
          coordinates: {
            latitude: 28.147458,
            longitude: 79.953425
          }
        },
        {
          coordinates: {
            latitude: 27.509225,
            longitude: 80.576782
          }
        },
        {
          coordinates: {
            latitude: 28.617425,
            longitude: 80.936497
          }
        },
        {
          coordinates: {
            latitude: 26.974224,
            longitude: 79.23293
          }
        },
        {
          coordinates: {
            latitude: 27.295668,
            longitude: 78.900631
          }
        },
        {
          coordinates: {
            latitude: 28.023335,
            longitude: 78.033329
          }
        },
        {
          coordinates: {
            latitude: 27.571151,
            longitude: 79.892513
          }

          // to here
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
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
          <Picker.Item label="Andra Pradesh" value="Andra Pradesh" />
          <Picker.Item label="Arunachal Pradesh" value="Arunachal Pradesh" />
          <Picker.Item label="Assam" value="Assam" />
          <Picker.Item label="Bihar" value="Bihar" />
          <Picker.Item label="Chhattisgarh" value="Chhattisgarh" />
          <Picker.Item label="Goa" value="Goa" />
          <Picker.Item label="Gujarat" value="Gujarat" />
          <Picker.Item label="Haryana" value="Haryana" />
          <Picker.Item label="Himachal Pradesh" value="Himachal Pradesh" />
          <Picker.Item label="Jammu and Kashmir" value="Jammu and Kashmir" />
          <Picker.Item label="Jharkhand" value="Jharkhand" />
          <Picker.Item label="Karnataka" value="Karnataka" />
          <Picker.Item label="Kerala" value="Kerala" />
          <Picker.Item label="Maharashtra" value="Maharashtra" />
          <Picker.Item label="Manipur" value="Manipur" />
          <Picker.Item label="Meghalaya" value="Meghalaya" />
          <Picker.Item label="Mizoram" value="Mizoram" />
          <Picker.Item label="Nagaland" value="Nagaland" />
          <Picker.Item label="Orissa" value="Orissa" />
          <Picker.Item label="Punjab" value="Punjab" />
          <Picker.Item label="Rajasthan" value="Rajasthan" />
          <Picker.Item label="Sikkim" value="Sikkim" />
          <Picker.Item label="Telagana" value="Telagana" />
          <Picker.Item label="Tripura" value="Tripura" />
          <Picker.Item label="Uttaranchal" value="Uttaranchal" />
          <Picker.Item label="Uttar Pradesh" value="Uttar Pradesh" />
          <Picker.Item label="West Bengal" value="West Bengal" />
        </Picker>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 26.154512,
            longitude: 80.685005,
            latitudeDelta: 5,
            longitudeDelta: 5
          }}
        >
          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={marker.coordinates}
              title="" //{marker.title}
              image={require("../../assets/heatmarker.png")}
              style={{ opacity: 0.5 }}
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
    justifyContent: "center",
    alignItems: "center",
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
