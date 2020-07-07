import "react-native-gesture-handler";
import * as React from "react";
import {
  Image,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Item,
  Input,
  Logo,
} from "react-native";
import App from "../App";
import styles from "../css";

function VerifyScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.loginLogo}
        fadeDuration={1000}
        source={require("../Images/logo_transparent.png")}
      />
      <View style={styles.details}>
        <TextInput placeholder="Phone number" style={styles.input} />
        <TouchableOpacity
          onPress={() => navigation.navigate("VerifyCode")}
          style={styles.signup}
        >
          <Text style={styles.loginT2}>Send Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default VerifyScreen;
