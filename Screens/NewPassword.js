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
<<<<<<< HEAD
import { Ionicons } from "@expo/vector-icons";

=======
>>>>>>> parent of d3cf729f... Merge branch 'master' of https://github.com/CoFestCorp/meeple
function One() {
  onPress = () => navigation.navigate("Login");
}
function two() {
  onPress = () => Alert.alert("Your password has been resest.");
}

function NewPasswordScreenScreen({ navigation }) {
  return (
<<<<<<< HEAD
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
=======
    <View style={styles.QRegScreen}>
      <Image
        style={styles.Recoverylogo}
        fadeDuration={1000}
        source={require("../Images/logo_transparent.png")}
      />

      <Text style={styles.CodeText}>Password reset</Text>
      <Text style={styles.CodeInfo}>Please enter your new password below.</Text>
>>>>>>> parent of d3cf729f... Merge branch 'master' of https://github.com/CoFestCorp/meeple

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
