import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

export default class Account extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Icon name="account-outline" size={50} color="gray" />
      </TouchableOpacity>
    );
  }
}
