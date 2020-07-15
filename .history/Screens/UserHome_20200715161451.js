import "react-native-gesture-handler";
import * as React from "react";
import {
  View,
  Text,
  Button,
  Touchable,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import styles from "../css";
import SwipeCard from "../Components/SwipeCards.js";
import Account from "../Components/Account.js";
import Chat from "../Components/Chat.js";
import Cards from "../Components/Cards.js";
import { TouchableOpacity } from "react-native-gesture-handler";

function UserHomeScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        //It checks the OS, if it's android it takes the height of the statusBar + 20, else 0.
        paddingTop:
          Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
      }}
    >
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}></TouchableOpacity>
        <Account />
        <Cards />
        <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
          <Chat />
        </TouchableOpacity>
      </View>
      <SwipeCard style={{ flex: 1 }} />
    </SafeAreaView>
  );
}

export default UserHomeScreen;
