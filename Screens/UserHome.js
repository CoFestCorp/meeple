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
  StyleSheet,
} from "react-native";

import SwipeCard from "../Components/SwipeCards.js";
import Chat from "../Components/Chat.js";
import Cards from "../Components/Cards.js";
import Account from "../Components/Account.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { render } from "react-dom";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const UserHomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bar}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Account />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("UserHome")}>
          <Cards />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
          <Chat />
        </TouchableOpacity>
      </View>
      <View style={{ height: "75%" }}>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //It checks the OS, if it's android it takes the height of the statusBar + 20, else 0.
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
  },
  bar: {
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttons: {
    height: "15%",
    flexDirection: "row",
    justifyContent: "space-around",
    zIndex: -1000,
  },
});
export default UserHomeScreen;
