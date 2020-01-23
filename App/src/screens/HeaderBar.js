import React from "react";
import Drawer from "./Drawer";
import "@expo/vector-icons";
import { Text } from "react-native";
import { Header, Right, Center, Left, Icon } from "native-base";
export default class HeaderBar extends React.Component {
  render() {
    return (
      <Header style={{ backgroundColor: "#fff" }}>
        <Left>
          <Icon name="menu" color="#1C8ADB" />
        </Left>
        <Center>
          <Text
            name="MENU"
            style={{
              color: "#1C8ADB",
              fontWeight: "bold",
              fontSize: 22,
              letterSpacing: 3
            }}
          />
        </Center>

        <Right>
          <Icon name="lock" color="#1C8ADB" onPress={this.signOutUser} />
        </Right>
      </Header>
    );
  }
}
