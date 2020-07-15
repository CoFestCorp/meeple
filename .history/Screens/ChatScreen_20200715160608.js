import "react-native-gesture-handler";
import * as React from "react";
import SwipeCard from "../Components/SwipeCards.js";
import Account from "../Components/Account.js";
import Chat from "../Components/Chat.js";
import { TouchableOpacity } from "react-native-gesture-handler";

import App from "../App";
import { SafeAreaView, View } from "react-native";

function ChatScreen({ navigation }) {
  return(
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        //It checks the OS, if it's android it takes the height of the statusBar + 20, else 0.
        paddingTop:
          Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
      }}>
      <View>

      </View>
    </SafeAreaView>
  );
}

export default ChatScreen;
