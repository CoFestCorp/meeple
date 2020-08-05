import "react-native-gesture-handler";
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SwipeCard from "../Components/SwipeCards.js";
import Chat from "../Components/Chat.js";

import { TouchableOpacity } from "react-native-gesture-handler";

import { render } from "react-dom";
import {
  MaterialCommunityIcons as Icon,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";

function ChatScreen() {
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: "#FFFFFF",
      }}
    >
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </View>
  );
}
function UserHomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF" }}>
      <View style={{ height: "84%" }}>
        <SwipeCard />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity>
          <Icon name="heart-circle" size={70} color="#22d44b" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="circle-with-cross" size={70} color="red" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function ProfileScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", backgroundColor: "#FFFFFF" }}
    >
      <View
        style={{
          height: "50%",

          alignItems: "center",
        }}
      >
        <Image
          style={{
            height: 200,
            width: 200,
            borderRadius: 100,
            marginVertical: 20,
          }}
          source={require("../Images/1.jpg")}
        />
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Adam, 56</Text>
        <Text style={{ fontSize: 18 }}>CoFest Corp.</Text>
      </View>
      <View
        style={{
          height: "15%",
          width: "50%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <Icon name="settings" size={35} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="border-color"
            size={35}
            color="grey"
            style={{ paddingTop: 6 }}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={{
          width: "30%",
          height: "25%",
          alignSelf: "center",
        }}
        fadeDuration={1000}
        source={require("../Images/logo_transparent.png")}
      />
    </SafeAreaView>
  );
}

const Tab = createMaterialTopTabNavigator();

function Main({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Chat") {
            iconName = focused ? "ios-chatbubbles" : "md-chatbubbles";
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-person" : "md-person";
          } else if (route.name === "UserHome") {
            iconName = focused ? "ios-heart" : "ios-heart-empty";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "purple",
        inactiveTintColor: "gray",
        showIcon: true,
        showLabel: false,
      }}
      style={styles.container}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="UserHome" component={UserHomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    //It checks the OS, if it's android it takes the height of the statusBar + 20, else 0.
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
  },

  buttons: {
    height: "15%",
    flexDirection: "row",
    justifyContent: "space-around",
    zIndex: -1000,
  },
});

export default Main;
