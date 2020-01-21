import React from 'react';
import {View,Text,Image,StyleSheet, ImageBackground} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

export default class RegisterScreen extends React.Component{
    render() {
        return(
            <ImageBackground source={require('./images/Back.jpg')}>
            <View>
                <Text>Hello! User</Text>
            </View>
            </ImageBackground>
        )
    }
}