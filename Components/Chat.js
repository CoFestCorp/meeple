import React, { Component } from "react";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default class Chat extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
        <Icon name="chat-outline" size={50} color="gray" />
      </TouchableOpacity>
    );
  }
}
