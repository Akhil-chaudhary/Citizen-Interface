import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component{

    state= {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const {email, password} = this.state
        firebase.auth().signInWithEmailAndPassword(email,password).catch(error => this.setState({errorMessage: error.message}))
        this.props.navigation.navigate("Home")
    }



    render() {
        return(
            <View style={styles.container}>
                <Image 
                style={{width:180,height:180,}}
                    source={require('../../assets/User.png')}
                />
                <Text style={styles.greeting}>Citizen Login</Text>
                <View style={styles.errorMessage}>
                {this.state.errorMessage && <Text style={styles.error}> {this.state.errorMessage} </Text>}
                </View>

                <View style={styles.form}>
                    <View >
                        <TextInput 
                        placeholder='Email Address'
                        style={styles.input}
                        autoCapitalize="none" 
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}></TextInput>
                    </View>


                    <View style={{marginTop:32}} >
                        <TextInput 
                        placeholder='Password'
                        style={styles.input} 
                        autoCapitalize="none" 
                        secureTextEntry
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                        >
                        </TextInput>
                    </View>


                    <TouchableOpacity 
                    style={styles.button}
                    onPress={this.handleLogin}
                    >
                        <Text style={{color:"#FFF", fontWeight:"500"}}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    rounded
                    style={{alignSelf: "center", marginTop:32}}
                    onPress={() => this.props.navigation.navigate("Register")}
                    >
                        <Text style={{color: "#414959", fontSize: 15 }}>
                            New to NCRB App?<Text style={styles.signup}> Sign Up</Text>
                            </Text>
                    </TouchableOpacity>

                </View>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    greeting: {
        marginTop:32,
        fontSize:28,
        fontWeight:'bold',
        fontWeight:"400",
        textAlign: "center"
    },
    errorMessage:{
        height:72,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:30
    },
    form:{
        marginBottom:60,
        marginHorizontal:30,
    },
    inputTitle:{
        marginBottom:10,
        color:"#8A8F9E",
        fontSize: 20,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor:"#8A8F9E",
        borderBottomWidth: 2,
        height:40,
        fontSize:20,
        color: "#161F3D",
        marginBottom:20,
        marginTop:-5,
    },
    button:{
        marginHorizontal: -30,
        backgroundColor:"#1C8ADB",
        borderRadius:15,
        height:40,
        alignItems: "center",
        justifyContent:"center"
    },
    signup:{
        fontWeight: "600",
        color:"#1C8ADB"
    },
    error:{
        color: "#ff0000",
        fontSize:15,
        fontWeight:"600",
        textAlign:"center"
    }
    
});