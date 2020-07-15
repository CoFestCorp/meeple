import "react-native-gesture-handler";
import * as React from "react";
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../css";
import App from "../App";

function PhoneNumberScreen({ navigation }) {
  return (
    <View style={styles.QRegScreen}>
      <Image
        style={styles.Recoverylogo}
        fadeDuration={1000}
        source={require("../Images/logo_transparent.png")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("RecoveryCode")}>
        <Ionicons name="ios-arrow-back" size={30} color="black" style={{ right: 180, top: -130 }} />
      </TouchableOpacity>
      <Text style={styles.RecoveryText}>Phone Number Recovery</Text>
      <Text style={styles.PhoneRecInfo}>
        This will require your phone number that was linked with your account,
        simply enter below to receive a reset code via text.
      </Text>

      <Text style={styles.phoneTitle}>Phone number</Text>
      <TextInput
        placeholder="Phone number"
        style={styles.PhoneInput}
      ></TextInput>
      <TouchableOpacity
        onPress={() => navigation.navigate("RecoveryCode")}
        style={styles.RecoverySubmit2}
      >
        <Text style={styles.submitText2}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PhoneNumberScreen;
