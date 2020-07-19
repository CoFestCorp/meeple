import "react-native-gesture-handler";
import * as React from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  Dimensions,
  StatusBar,
  StyleSheet,
} from "react-native";

import App from "../App";
import { Ionicons } from "@expo/vector-icons";

const SCREEN_HEIGHT = Dimensions.get("screen").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
//changes made this this function
function QRegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: "20%", height: "15%", alignSelf: "center" }}
        fadeDuration={1000}
        source={require("../Images/logo_transparent.png")}
      />

      <View style={{ height: "70%", paddingHorizontal: "2%" }}>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontWeight: "bold",
            paddingVertical: "5%",
          }}
        >
          Forgot your password ?
        </Text>
        <Text style={{ color: "white", fontSize: 16, marginBottom: "15%" }}>
          Don't worry type your email here and we'll recover it for you.
        </Text>

        <TextInput
          placeholder="  Email address"
          style={{
            width: 305,
            height: 58,
            backgroundColor: "white",
            borderRadius: 24,
            paddingHorizontal: 10,
            marginBottom: "5%",
          }}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("PhoneNumberRecovery")}
          style={{ left: "50%" }}
        >
          <Text style={{ color: "white" }}>Forgot your Email ?</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: "15%" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("RecoveryCode")}
          style={{
            width: 300,
            height: 40,

            backgroundColor: "white",
            borderRadius: 24,
            alignSelf: "center",
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
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#52307c",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
  },
  input: {
    paddingVertical: "3.5%",
    paddingRight: "50%",
    textAlignVertical: "center",
    backgroundColor: "#E5E5E5",
    borderRadius: 24,
  },
  button: {
    paddingVertical: "3.5%",
    paddingHorizontal: "30%",
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#7041EE",
    borderRadius: 24,
  },
});

export default QRegisterScreen;
