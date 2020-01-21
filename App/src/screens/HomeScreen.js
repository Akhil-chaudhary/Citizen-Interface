import React,{useState} from 'react';
import {View,Text,Image,StyleSheet, Button,ImageBackground,ScrollView,rgba} from 'react-native';
import {Header} from 'react-native-elements';
import { Constants } from 'expo';
import PropTypes from 'prop-types';
import '@expo/vector-icons';
import { TextInput, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { Right, Row } from 'native-base';
export default class HomeScreen extends React.Component{
  
    render() {            
        return(
            <ImageBackground source={require('../../assets/Back.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={style.container}>
                  <Header
                    leftComponent={{
                      icon: 'menu',
                      color: "#1C8ADB",
                      onPress: () => alert('Menu'),
                    }}
                    centerComponent={{ text: 'MENU', style: { color: "#1C8ADB",fontWeight:'bold',fontSize:22,letterSpacing:3 } }}
                    rightComponent={{ icon: 'lock', color: "#1C8ADB", onPress: () => this.props.navigation.navigate("Login") }}
                    backgroundColor='#fff'
                  />
                </View>
                          
              <View style={styles.container}>
                <ScrollView>
                  <TouchableOpacity>
                    <View style={styles.tab} >
                      <Text  style={styles.item} >Alert!</Text>
                      <Image style={styles.img}  source={require('../../assets//1.png')}/>
                    </View>
                    </TouchableOpacity>  
                    <TouchableOpacity>
                    <View  style={styles.tab}>
                      <Text style={styles.item}>Applications</Text>
                      <Image  style={styles.img}  source={require('../../assets//2.png')}/>
                    </View>
                    </TouchableOpacity>  
                    <TouchableOpacity>
                    <View  style={styles.tab}>
                      <Text style={styles.item}>Online FIR</Text>
                      <Image style={styles.img} source={require('../../assets//3.png')}/>
                    </View>
                    </TouchableOpacity>  
                    <TouchableOpacity>
                    <View  style={styles.tab}>
                      <Text style={styles.item}>NOC Request</Text>
                      <Image style={styles.img} source={require('../../assets//4.png')}/>
                    </View>
                    </TouchableOpacity>  
                    <TouchableOpacity>
                    <View  style={styles.tab}>
                      <Text style={styles.item}>Appointment Scheduling</Text>
                      <Image  style={styles.img}  source={require('../../assets//6.png')}/>
                    </View>
                    </TouchableOpacity>  
                    <TouchableOpacity>
                    <View  style={styles.tab}>
                      <Text style={styles.item}>Recent Activities</Text>
                      <Image  style={styles.img}  source={require('../../assets//6.png')}/>
                    </View>
                    </TouchableOpacity>  
                </ScrollView>
              </View>
            </ImageBackground>
        )
    }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    marginTop:-500
  },
  img:{
    position: "absolute",
    right:10,
    bottom:10,
    alignItems:"center",
    height:50,
    width:50
  },
  tab:{
    flexDirection:'row',
    marginTop: 14,
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius:5,
  },
  item: {
    alignItems:"center",
    fontSize:20 ,
  }
});
