import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

export default class Cards extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Icon name="cards-outline" size={50} color="#7041EE" />
      </TouchableOpacity>
    );
  }
}
