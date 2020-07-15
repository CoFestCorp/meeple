import "react-native-gesture-handler";
import * as React from "react";
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../css";
import App from "../App";
import { Ionicons } from '@expo/vector-icons';

function RecoveryCodeScreen({ navigation }) {
  return (
    <View style={styles.QRegScreen}>
      <Image
        style={styles.Recoverylogo}
        fadeDuration={1000}
        source={require("../Images/logo_transparent.png")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Ionicons name="ios-arrow-back" size={30} color="black" style={{ right: 180, top:}} />
      </TouchableOpacity>
      <Text style={styles.CodeText}>Recovery code</Text>
      <Text style={styles.CodeInfo}>
        Please enter the recovery code you received via email / text.
      </Text>

      <Text style={styles.CodeTitle}>Recovery code</Text>
      <TextInput
        placeholder="  Recovery code"
        style={styles.CodeInput}
      ></TextInput>

      <TouchableOpacity
        onPress={() => navigation.navigate("NewPassword")}
        style={styles.RecoverySubmit}
      >
        <Text style={styles.submitText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
}

export default RecoveryCodeScreen;
