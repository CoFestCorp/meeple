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
        <Account />
        <Cards />
        <Chat onPress={() => navigation.navigate("ChatScreen")} />
      </View>
      <SwipeCard style={{ flex: 1 }} />
    </SafeAreaView>
  );
}

export default UserHomeScreen;
