import "react-native-gesture-handler";
import * as React from "react";
import {
  Alert,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "../css";
import App from "../App";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import PasswordToggleInput from "../Components/PasswordToggleIn.js";
import { Ionicons } from "@expo/vector-icons";

function One() {
  onPress = () => navigation.navigate("Login");
}
function two() {
  onPress = () => Alert.alert("Your password has been resest.");
}

function NewPasswordScreenScreen({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#52307c", flex: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: "2%" }}>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontWeight: "bold",
            paddingVertical: "2%",
            alignSelf: "center",
          }}
        >
          Password reset
        </Text>
        <Text style={{ color: "white", fontSize: 16, marginBottom: "15%" }}>
          Please enter your new password below.
        </Text>

        <Text style={{ color: "white", fontSize: 15 }}>New password</Text>
        <PasswordToggleInput />

        <Text style={{ color: "white", fontSize: 15 }}>Confirm password</Text>
        <PasswordToggleInput />

        <TouchableOpacity
          onPress={() => {
            Alert.alert("Your password has been reset.");
          }}
          onPressIn={() => {
            navigation.navigate("Login");
          }}
          style={{
            width: 300,
            height: 40,
            backgroundColor: "white",
            borderRadius: 24,
            alignSelf: "center",
            marginTop: "65%",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              textAlignVertical: "center",
              color: "black",
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            Enter
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default NewPasswordScreenScreen;
