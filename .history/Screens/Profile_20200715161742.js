import * as React from "react";
import SwipeCard from "../Components/SwipeCards.js";
import Account from "../Components/Account.js";
import Chat from "../Components/Chat.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView, View } from "react-native";
import Cards from "../Components/Cards.js";

import Account from "../Components/Account.js";
import Chat from "../Components/Chat.js";
import Cards from "../Components/Cards.js";

function Profile({ navigation }) {
  return(
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
  </View>
  );
}

export default Profile;
