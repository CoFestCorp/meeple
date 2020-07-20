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

import Account from "../Components/Account.js";
import Chat from "../Components/Chat.js";
import Cards from "../Components/Cards.js";

function Profile({ navigation }) {
  <View
    style={{
      flexDirection: "row",
      height: 570,
      top: 70,
      justifyContent: "space-around",
    }}
  >
    <Account />
    <Cards />
    <Chat />
  </View>;
}

export default Profile;
