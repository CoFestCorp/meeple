import "react-native-gesture-handler";
import * as React from "react";
import {
  View,
  Text,
  Button,
  Touchable,
  Image,
  SafeAreaView,
} from "react-native";
import styles from "../css";
import SwipeCard from "../Components/SwipeCards.js";
import Account from "../Components/Account.js";
import Chat from "../Components/Chat.js";
import Cards from "../Components/Cards.js";

function UserHomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flexDirection: "column-reverse" }}>
      <View
        style={{
          flexDirection: "row",
          height: 570,
          top: 700,
          justifyContent: "space-around",
        }}
      >
        <Account />
        <Cards />
        <Chat />
      </View>
      <SwipeCard style={styles.swipe} />
    </SafeAreaView>
  );
}

export default UserHomeScreen;
