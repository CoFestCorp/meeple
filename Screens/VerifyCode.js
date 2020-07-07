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

function VerifyCodeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.loginLogo}
        fadeDuration={1000}
        source={require("../Images/logo_transparent.png")}
      />
      <View style={styles.details}>
        <TextInput placeholder="Confirmation code" style={styles.input} />
        <TouchableOpacity
          onPress={() => navigation.navigate("UserHome")}
          style={styles.signup}
        >
          <Text style={styles.loginT2}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default VerifyCodeScreen;
