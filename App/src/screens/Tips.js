import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ImageBackground,
  ScrollView,
  rgba
} from "react-native";
import { Header } from "react-native-elements";

import TreeView from "react-native-final-tree-view";
import React, { Component } from "react";
export default class Tips extends Component {
  state = {
    data: [
      {
        id: "PERSONAL SAFETY TIPS FOR WOMEN AT HOME",
        name: "PERSONAL SAFETY TIPS FOR WOMEN AT HOME",
        children: [
          {
            id:
              "Women who live alone should list only their last names and initials on their mailboxes and in the telephone directory.",
            name:
              "Women who live alone should list only their last names and initials on their mailboxes and in the telephone directory."
          },
          {
            id:
              "Always keep the door locked, even if you are at home and even if you leave the house for just a few minutes.",
            name:
              "Always keep the door locked, even if you are at home and even if you leave the house for just a few minutes."
          },
          {
            id:
              "Never open the door automatically after a knock, Ensure that strangers have identified themselves properly before allowing them to enter, Utilize a peep-hole (magic-eye) to verify identification.",
            name:
              "Never open the door automatically after a knock, Ensure that strangers have identified themselves properly before allowing them to enter, Utilize a peep-hole (magic-eye) to verify identification."
          },
          {
            id:
              "Leave the light on over the door which you will be using to enter at night. Have your key ready so that the door may be opened immediately.",
            name:
              "Leave the light on over the door which you will be using to enter at night. Have your key ready so that the door may be opened immediately."
          },
          {
            id: "Close curtains at night.",
            name: "Close curtains at night."
          },
          {
            id:
              "Never admit over the phone or to strangers that you will be alone at home.",
            name:
              "Never admit over the phone or to strangers that you will be alone at home."
          },
          {
            id:
              "Lifts: If you live in an apartment building where you know most of the residents and find your self in the lobby with a stranger, let him take the lift first and wait for it to return for you. If you are on the lift and someone’s presence makes you uneasy, get the control panel. If someone attacks, hit the alarm button and press as many buttons as you can so that lift will stop at any of several floors.",
            name:
              "Lifts: If you live in an apartment building where you know most of the residents and find your self in the lobby with a stranger, let him take the lift first and wait for it to return for you. If you are on the lift and someone’s presence makes you uneasy, get the control panel. If someone attacks, hit the alarm button and press as many buttons as you can so that lift will stop at any of several floors."
          },
          {
            id:
              "If a stranger requests the use of your phone, do not let him enter your apartment. Place the call for him instead.",
            name:
              "If a stranger requests the use of your phone, do not let him enter your apartment. Place the call for him instead."
          },
          {
            id:
              "If you return home and detect evidence that someone as broken in to your domicile, do not enter the premises and do not scream. Proceed to the closest neighbor's house and phone and police from there.",
            name:
              "If you return home and detect evidence that someone as broken in to your domicile, do not enter the premises and do not scream. Proceed to the closest neighbor's house and phone and police from there."
          }
        ]
      },
      {
        id: "FOR FREQUENT FEMALE TRAVELERS",
        name: "FOR FREQUENT FEMALE TRAVELERS",
        children: [
          {
            id:
              "The above recommendations apply to men and women equally. However a few additional suggestions are advisory for women.",
            name:
              "The above recommendations apply to men and women equally. However a few additional suggestions are advisory for women."
          },
          {
            id: "Travel on well-lit streets and keep your purse out of sight.",
            name: "Travel on well-lit streets and keep your purse out of sight."
          },
          {
            id:
              "If you have car trouble in a dark area, lock yourself in and await the arrival of the police.",
            name:
              "If you have car trouble in a dark area, lock yourself in and await the arrival of the police."
          },
          {
            id:
              "If a stranger stops to give you assistance do not get out of the car. Ask the person to call for help.",
            name:
              "If a stranger stops to give you assistance do not get out of the car. Ask the person to call for help."
          },
          {
            id: "Do not stop & offer help to stranded motorist.",
            name: "Do not stop & offer help to stranded motorist."
          },
          {
            id:
              "If you suspect that someone is following you, drive to the police station or police picket.",
            name:
              "If you suspect that someone is following you, drive to the police station or police picket."
          },
          {
            id: "Women are urged not to ask for lift under any circumstances.",
            name: "Women are urged not to ask for lift under any circumstances."
          },
          {
            id: "Never pick up a person asking for lift.",
            name: "Never pick up a person asking for lift."
          }
        ]
      },
      {
        id: "FOUR WHEELER SAFETY",
        name: "FOUR WHEELER SAFETY",
        children: [
          {
            id: "Always Double lock your car when entering or leaving it.",
            name: "Always Double lock your car when entering or leaving it."
          },
          {
            id:
              "Mark your car radio and other removable car equipment for identification.",
            name:
              "Mark your car radio and other removable car equipment for identification."
          },
          {
            id: "Utilize a locking switch lock.",
            name: "Utilize a locking switch lock."
          },
          {
            id:
              "Never leave valuables such as cheque books, credit cards, etc, unattended in your car. Lock all valuables in the trunk.",
            name:
              "Never leave valuables such as cheque books, credit cards, etc, unattended in your car. Lock all valuables in the trunk."
          },
          {
            id: "Park in a well-lit and busy area.",
            name: "Park in a well-lit and busy area."
          },
          {
            id:
              "Carry your vehicle registration with you. A thief can use your registration to show legal possession of your car.",
            name:
              "Carry your vehicle registration with you. A thief can use your registration to show legal possession of your car."
          },
          {
            id:
              "Report suspicious actions, someone peering in to every parked car on the street, someone forcing a vent window or removing gasoline or, license plates.",
            name:
              "Report suspicious actions, someone peering in to every parked car on the street, someone forcing a vent window or removing gasoline or, license plates."
          },
          {
            id: "Check the back seat before getting into the car.",
            name: "Check the back seat before getting into the car."
          }
        ]
      }
    ]
  };

  getIndicator(isExpanded, hasChildrenNodes) {
    if (!hasChildrenNodes) {
      return ">";
    } else if (isExpanded) {
      return ">";
    } else {
      return "+";
    }
  }

  render() {
    return (
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <Header
          leftComponent={{
            icon: "menu",
            color: "#fff",
            onPress: () => this.props.navigation.openDrawer()
          }}
          centerComponent={{
            text: "Tips",
            style: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: 22,
              letterSpacing: 3
            }
          }}
          rightComponent={{
            icon: "close",
            color: "#fff",
            onPress: () => this.props.navigation.navigate("Home")
          }}
          backgroundColor="#1C8ADB"
        />
        <View style={styles.wrapper}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require("../../assets/logo.png")}
          />
        </View>
        <ScrollView style={{ top: "10%", marginHorizontal: "4%" }}>
          <Text
            style={{
              color: "#1C8ADB",
              fontWeight: "bold",
              fontSize: 22
            }}
          >
            General Safety Tips:{"\n"}
          </Text>
          <View>
            <Text style={styles.text}>
              PERSONAL SAFETY TIPS FOR WOMEN AT HOME
            </Text>
            <Text style={{ fontSize: 20, paddingBottom: 35 }}>
              {"\u2022" + " "}Women who live alone should list only their last
              names and initials on their mailboxes and in the telephone
              directory.{"\n"}
              {"\u2022" + " "}
              Always keep the door locked, even if you are at home and even if
              you leave the house for just a few minutes.{"\n"}
              {"\u2022" + " "}
              Never open the door automatically after a knock, Ensure that
              strangers have identified themselves properly before allowing them
              to enter, Utilize a peep-hole (magic-eye) to verify
              identification.
              {"\n"}
              {"\u2022" + " "}
              Leave the light on over the door which you will be using to enter
              at night. Have your key ready so that the door may be opened
              immediately. Close curtains at night.{"\n"}
              {"\u2022" + " "}
              Never admit over the phone or to strangers that you will be alone
              at home.{"\n"}
              {"\u2022" + " "}
              Lifts: If you live in an apartment building where you know most of
              the residents and find your self in the lobby with a stranger, let
              him take the lift first and wait for it to return for you. If you
              are on the lift and someone’s presence makes you uneasy, get the
              control panel. If someone attacks, hit the alarm button and press
              as many buttons as you can so that lift will stop at any of
              several floors.{"\n"}
              {"\u2022" + " "}
              If a stranger requests the use of your phone, do not let him enter
              your apartment. Place the call for him instead.{"\n"}
              {"\u2022" + " "}
              If you return home and detect evidence that someone as broken in
              to your domicile, do not enter the premises and do not scream.
              Proceed to the closest neighbor's house and phone and police from
              there.
              {"\n"}
            </Text>
          </View>

          <View>
            <Text style={styles.text}>FOR FREQUENT FEMALE TRAVELERS</Text>
            <Text style={{ fontSize: 20, paddingBottom: 35 }}>
              {"\u2022" + " "}The above recommendations apply to men and women
              equally. However a few additional suggestions are advisory for
              women.{"\n"}
              {"\u2022" + " "}
              Travel on well-lit streets and keep your purse out of sight.{"\n"}
              {"\u2022" + " "}
              If you have car trouble in a dark area, lock yourself in and await
              the arrival of the police.{"\n"}
              {"\u2022" + " "}
              If a stranger stops to give you assistance do not get out of the
              car. Ask the person to call for help.{"\n"}
              {"\u2022" + " "}
              Do not stop & offer help to stranded motorist.{"\n"}
              {"\u2022" + " "}
              If you suspect that someone is following you, drive to the police
              station or police picket.{"\n"}
              {"\u2022" + " "}
              Women are urged not to ask for lift under any circumstances.{"\n"}
              {"\u2022" + " "}
              Never pick up a person asking for lift.{"\n"}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>FOUR WHEELER SAFETY</Text>
            <Text style={{ fontSize: 20, paddingBottom: 35 }}>
              {"\u2022" + " "}Always Double lock your car when entering or
              leaving it.{"\n"}
              {"\u2022" + " "}
              Mark your car radio and other removable car equipment for
              identification.{"\n"}
              {"\u2022" + " "}
              Utilize a locking switch lock.{"\n"}
              {"\u2022" + " "}
              Never leave valuables such as cheque books, credit cards, etc,
              unattended in your car. Lock all valuables in the trunk. Park in a
              well-lit and busy area.{"\n"}
              {"\u2022" + " "}
              Carry your vehicle registration with you. A thief can use your
              registration to show "legal" possession of your car.{"\n"}
              {"\u2022" + " "}
              Report suspicious actions, someone peering in to every parked car
              on the street, someone forcing a vent window or removing gasoline
              or, license plates.{"\n"}
              {"\u2022" + " "}
              Check the back seat before getting into the car.{"\n"}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>FOR A CHILDS DO'S & DON'TS</Text>
            <Text style={{ fontSize: 20, paddingBottom: 35 }}>
              {"\u2022" + " "}Never run errands for strangers, even for money.
              {"\n"}
              {"\u2022" + " "}
              Never accept candy money or gifts from a stranger, or an
              invitation to a movie, etc.{"\n"}
              {"\u2022" + " "}
              Never get in to a car with a stranger for any reason.{"\n"}
              {"\u2022" + " "}
              Never Hitch-Hike.{"\n"}
              {"\u2022" + " "}
              If a stranger attempts to coax you into a car, yell and run, then
              write down the license number from a safe distance, or scratch it
              in the dirt. Then tell your parents teacher or a policemen.{"\n"}
              {"\u2022" + " "}
              If a friend gets in to a car with a stranger, even if you have
              warned him not to, write down the license number and tell a
              policeman, your parents or teacher right away. Make sure that your
              parents always know you are and who you are with.{"\n"}
              {"\u2022" + " "}
              When collecting for charities, always travel in groups of two or
              more, and never go inside a stranger’s house.{"\n"}
              {"\u2022" + " "}
              Teach your children their full names, address and telephone No.
              {"\n"}
              {"\u2022" + " "}
              Tell them never to admit to being home alone on the phone or to
              someone at the door.{"\n"}
              {"\u2022" + " "}
              Instruct children to look out for each other and tell you when
              something unusual or suspicious happens.{"\n"}
              {"\u2022" + " "}
              Report suspicious individuals or vehicles lurking in areas where
              children play to the police.{"\n"}
              {"\u2022" + " "}
              Ask a trusted neighbor to provide sanctuary for your children
              should any threat or emergency arise while you are away from home.
              Offer to do same for them.{"\n"}
              {"\u2022" + " "}
              Every child should know that police are friends be able to
              recognize the uniform and know that a policeman will be receptive
              if the child is lost or frightened.{"\n"}
              {"\u2022" + " "}
              Children should be encouraged to play with friends and never in
              isolated areas or vacant buildings.{"\n"}
              {"\u2022" + " "}
              Parents should always know where their children are.{"\n"}
              {"\u2022" + " "}
              Parents should ensure that baby-sitters are known and can be
              trusted.{"\n"}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>SCHOOLS MUST ADOPT </Text>
            <Text style={{ fontSize: 20, paddingBottom: 35 }}>
              {"\u2022" + " "}Never release a child to anyone but the parents
              without telephone in the parent or guardian for approval.{"\n"}
              {"\u2022" + " "}
              If a parent phones to ask for early release of a child, confirm
              the caller’s identity. Call the parents back at their home number
              listed in the schools records.{"\n"}
              {"\u2022" + " "}
              If the call is being made away from home, determine authenticity
              be questioning the caller on details of the child.{"\n"}
              {"\u2022" + " "}
              Make sure all visitors check in to the office and have staff watch
              for unknown persons in the building.{"\n"}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>
              YOU MUST REMEMBER WHILE MOVING ON VACATION
            </Text>
            <Text style={{ fontSize: 20, paddingBottom: 35 }}>
              {"\u2022" + " "}Cancel all home deliveries of mail, newspapers,
              milk, etc.{"\n"}
              {"\u2022" + " "}
              Arrange to have your lawn cut and garden watered during your
              absence.{"\n"}
              {"\u2022" + " "}
              Do not leave notes for the paperboy, milkman, etc which would
              leave close as to your absence.{"\n"}
              {"\u2022" + " "}
              Do not advertise your plan for a vacation.{"\n"}
              {"\u2022" + " "}
              Notify a trusted neighbour of your plans and leave a key with him
              or her.{"\n"}
              {"\u2022" + " "}
              Be sure all tools and ladders are out of sight.{"\n"}
              {"\u2022" + " "}
              Leave your drapes open. Closed drapes would conceal a burglar from
              view of your neighbours.{"\n"}
              {"\u2022" + " "}
              Turn your telephone down to its lowest level as a ringing
              telephone is an indication that no one is home.{"\n"}
              {"\u2022" + " "}
              Do not pack your car the night before leaving on you vacation.
              Have everything ready so that you can load the car before leaving
              in the morning. This should be done as quickly as possible so that
              strangers in the neighbourhood will not have a chance to observe
              you and see that the home will be vacant.{"\n"}
              {"\u2022" + " "}
              Before leaving check to ensure that all doors and windows are
              secured.{"\n"}
              {"\u2022" + " "}
              Be sure that garage is locked. Garages contain tools, which would
              assist a burglar in break-ins. As well, once inside the garage,
              the thief would have ample privacy to do his business.{"\n"}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>REQUEST TO YOUR NEIGHBOUR FOR</Text>
            <Text style={{ fontSize: 20, paddingBottom: 100 }}>
              {"\u2022" + " "}Remove throw away papers from your doorstep during
              your absence.{"\n"}
              {"\u2022" + " "}
              Rearrange the positions of interior draperies from time to time.
              {"\n"}
              {"\u2022" + " "}
              Notify the police if they detect anything suspicious stranger
              around the house, enquiring strangers: etc.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    color: "#1C8ADB",
    fontWeight: "bold",
    fontSize: 20
  },
  wrapper: {
    top: "7%",
    backgroundColor: "transparent",
    alignItems: "center"
  }
});
