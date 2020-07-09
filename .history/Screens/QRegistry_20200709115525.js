import "react-native-gesture-handler";
import * as React from "react";
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../css";
import App from "../App";

//changes made this this function
function QRegisterScreen({ navigation }) {
  return (
    <View style={styles.QRegScreen}>
      <Image
        style={styles.Recoverylogo}
        fadeDuration={1000}
        source={require("../Images/logo_transparent.png")}
      />

      <Text style={styles.RecoveryText}>Forgot your password ?</Text>
      <Text style={styles.RecoveryInfo}>
        Don't worry type your email here and we'll recover it for you.
      </Text>

      <Text style={styles.EmailTitle}>Email address</Text>
      <TextInput
        placeholder="  Email address"
        style={styles.EmailInput}
      ></TextInput>

      <TouchableOpacity
        onPress={() => navigation.navigate("PhoneNumberRecovery")}
        style={styles.ForgotEmailbtnDesign}
      >
        <Text style={styles.ForgotEmailbtn}>Forgot your Email ?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("  RecoveryCode")}
        style={styles.RecoverySubmit}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
//nothing below here

export default QRegisterScreen;
