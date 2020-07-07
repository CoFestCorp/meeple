import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import SwipeCards from "./SwipeCards.js";

function UserHomeScreen({ navigation }) {
  return (
    <View>
      <Text>Hello</Text>
      <SwipeCards style={{ flex: 1 }} />
    </View>
  );
}

export default UserHomeScreen;
