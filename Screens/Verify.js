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
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import App from "../App";

import { Ionicons } from "@expo/vector-icons";

function VerifyScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: "20%", height: "15%", alignSelf: "center" }}
        fadeDuration={1000}
        source={require("../Images/logo_transparent.png")}
      />

      <View style={{ paddingHorizontal: "2%" }}>
        <Text style={styles.title}>You're just one step away!</Text>
        <Text style={{ color: "#9b4ae6", fontSize: 16, marginBottom: "15%" }}>
          To verify your identity, plese enter your phone number. We will
          shortly send you a text message with a verification code.
        </Text>

        <TextInput placeholder="  Phone number" style={styles.input} />
        <TouchableOpacity
          onPress={() => navigation.navigate("VerifyCode")}
          style={styles.touchable}
        >
          <Text style={styles.button}>Send Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
  },
  title: {
    color: "#9b4ae6",
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: "5%",
  },
  input: {
    paddingVertical: "3.5%",
    paddingRight: "45%",
    paddingLeft: "5%",
    textAlignVertical: "center",
    backgroundColor: "#E5E5E5",
    borderRadius: 24,
  },
  touchable: {
    width: 305,
    height: 58,
    marginTop: "40%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7041EE",
    borderRadius: 24,
  },
  button: { color: "white", fontWeight: "bold", fontSize: 25 },
});
export default VerifyScreen;
