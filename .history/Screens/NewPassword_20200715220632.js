import "react-native-gesture-handler";
import * as React from "react";
import {
  Alert,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "../css";
import App from "../App";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import PasswordToggleInput from "../Components/PasswordToggleIn.js";
import { Ionicons } from '@expo/vector-icons';



function One() {
  onPress = () => navigation.navigate("Login");
}
function two() {
  onPress = () => Alert.alert("Your password has been resest.");
}

function NewPasswordScreenScreen({ navigation }) {
  return (
    <View style={styles.QRegScreen}>
      <Image
        style={styles.Recoverylogo}
        fadeDuration={1000}
        source={require("../Images/logo_transparent.png")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Ionicons name="ios-arrow-back" size={30} color="black" style={{ right: 180, top: -130 }} />
      </TouchableOpacity>
      <Text style={styles.CodeText}>Password reset</Text>
      <Text style={styles.CodeInfo}>Please enter your new password below.</Text>

      <Text style={styles.NewTitle}>New password</Text>
      <PasswordToggleInput />

      <Text style={styles.ConfirmTitle}>Confirm password</Text>
      <PasswordToggleInput styles={{ alignItems: "flex-start" }} />

      <TouchableOpacity
        onPress={() => {
          Alert.alert("Your password has been reset.");
        }}
        onPressIn={() => {
          navigation.navigate("Login");
        }}
        style={styles.RecoverySubmit3}
      >
        <Text style={styles.submitText3}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NewPasswordScreenScreen;
