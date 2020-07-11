import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import styles from "../css";
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
      <View>
        <TextInput
          {...this.props}
          placeholder="  Password"
          style={styles.input}
          secureTextEntry={this.state.secureTextEntry}
        />
        <TouchableOpacity onPress={this.onIconPress} style={styles.icon}>
          <Icon name={this.state.iconName} size={25} />
        </TouchableOpacity>
      </View>
    );
  }
}
