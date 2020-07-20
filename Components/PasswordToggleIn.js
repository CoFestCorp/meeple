import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

export default class PasswordToggleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      iconName: "eye",
    };
  }
  onIconPress = () => {
    let iconName = this.state.secureTextEntry ? "eye-off" : "eye";
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
      iconName: iconName,
    });
  };
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingVertical: "3.5%",
          paddingLeft: "5%",
          backgroundColor: "#E5E5E5",
          borderRadius: 24,
        }}
      >
        <TextInput
          {...this.props}
          placeholder="  Password"
          style={{
            flex: 1,
          }}
          secureTextEntry={this.state.secureTextEntry}
        />
        <TouchableOpacity
          onPress={this.onIconPress}
          style={{ paddingRight: "4%" }}
        >
          <Icon name={this.state.iconName} size={25} />
        </TouchableOpacity>
      </View>
    );
  }
}
