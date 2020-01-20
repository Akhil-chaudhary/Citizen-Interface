import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewBase} from 'react-native';
import * as firebase from 'firebase';
import { Label,Content,container,Button,Item, Input,Form} from 'native-base';
const firebaseConfig={
  apiKey: "AIzaSyB5mHPt2DrHm2IbuQXWBPV4sJw30VGlbIA",
  authDomain: "fir-1-d9120.firebaseapp.com",
  databaseURL: "https://fir-1-d9120.firebaseio.com",
  projectId: "fir-1-d9120",
  storageBucket: "fir-1-d9120.appspot.com",
};
if (!firebase.apps.length){
  firebase.initializeApp (firebaseConfig);
} 

export default class LoginScreen extends Component{
constructor(props)
{
  super(props)
  this.state=({
    email:'',
    password:''
  })
}
signUpUser=(email,password)=>{
  try{
      if(this.state.password.length < 6){
        alert("please")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email,password)
  }
  catch(error)
     {
       console.log(error.toString())
     }

    }


loginUser=(email,password)=>{
   try{
      firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
        console.log(user)
      })
    }
    catch(error)
     {
       console.log(error.toString())
     }

}

render() {
        return (

        
              <Form>
                
              <Item floatingLabel>
                <Label>Email</Label>
                <Input
                autoCapitalize='none'
                autoCorrec={false}
                onChangeText={(email) =>this.setState({email})}
                
                />
                </Item>
                <Item floatingLabel>
                <Label>Password</Label>
                <Input
                secureTextEntry={true}
                autoCapitalize='none'
                autoCorrec={false}
                onChangeText={(password) =>this.setState({password})}
                />
                </Item>
                <Button Style={{margintoo:10}}
                full
                rounded
                success
                onPress={()=>this.LoginScreen}
                >
                  <Text style={{color:"white"}}>Login</Text>
                </Button>
                <Button Style={{margintoo:10}}
                full
                rounded
                success
                primary
                onPress={()=>this.signUpUser(this.state.email ,this.state.password)}
                >
                  <Text style={{color:"white"}}>Sign UP </Text>
                </Button>
              </Form>
                  );
              }
}

const style = StyleSheet.create({
  container: {
    
    
    backgroundColor: '#fff',
    padding:10,
    justifyContent: 'center',
    
    
  },
 
});