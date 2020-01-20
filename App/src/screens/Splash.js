import React, { Component } from 'react';
import { View,Text, StyleSheet,Image } from 'react-native';
import {} from 'react-navigation';
  
export default class Splash extends Component{
    componentWillMount()
    {
        setTimeout(()=>this.props.navigation.navigate('Login'),1200)
    }
    render(){
        return(
            <View style={styles.wrapper}>
               
                <View style={styles.titleWrapper}>
                <Image 
                style={{width:250,height:250,}}
                    source={require('./images/logo.jpg')}
                />

                    <Text style={styles.title}>
                        NCRB
                    </Text>
                </View>
                <View>
                    <Text style={styles.subtitle}>
                        Citizen Interface
                    </Text>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    wrapper:{
        backgroundColor:'white',
        flex:1,
        justifyContent:'center',
        alignItems:"center"

    },
    title:{
        textAlign:"center",
        color:'black',
        fontSize:35,
        fontWeight:'bold'
    },
    subtitle:{
        color:'black',
        fontWeight:'200',
        paddingBottom:20
    },
    titleWrapper:{
        justifyContent: 'center',
        flex:1
    }
});