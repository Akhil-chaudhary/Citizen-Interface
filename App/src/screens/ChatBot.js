import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import {KeyboardAvoidingView} from 'react-native';
import { Header } from "react-native-elements";
import { dialogflowConfig } from './env';

const BOT_USER = {
  _id: 2,
  name: 'FAQ Bot',
  avatar: 'https://digitalindia.gov.in/writereaddata/files/17.png'
};

class ChatBot extends Component {
  state = {
    messages: [
      {
        _id: 1,
        text: `Hi! I am the FAQ bot 🤖 from CitizenApp.\n\nHow may I help you with today?`,
        createdAt: new Date(),
        user: {
          name: 'Citizen',
          avatar: 'https://digitalindia.gov.in/writereaddata/files/17.png'
        }
      }
    ]
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id
    );
  }

  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));

    let message = messages[0].text;
    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    );
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: {
        name: 'Citizen',
        avatar: 'https://digitalindia.gov.in/writereaddata/files/17.png'
      }
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#fff' }} behavior="padding" enabled>
        
      <Header
          leftComponent={{
            icon: "arrow-back",
            color: "#fff",
            onPress: () => this.props.navigation.navigate("Form")
          }}
          centerComponent={{
            text: "CHATBOT🤖",
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
                "This is a interactive chatbot for easy communication with User."
              )
          }}
          backgroundColor="#1C8ADB"
        />
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
        
      </KeyboardAvoidingView>
    );
  }
}

export default ChatBot;