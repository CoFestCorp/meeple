import React, { Component } from "react";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export default class Chat extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: "lightgray",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              height: 60,
              width: 60,
              borderRadius: 30,
            }}
            source={require("../Images/3.jpg")}
          />
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Dua</Text>
            <Text>Hello, what's up?</Text>
          </View>
        </View>
        <Text style={{ alignSelf: "center", color: "gray" }}>13.41</Text>
      </View>
    );
  }
}
