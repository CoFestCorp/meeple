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
} from "react-native";
import styles from "../css";
import App from "../App";
import { Ionicons } from "@expo/vector-icons";

const SCREEN_HEIGHT = Dimensions.get("screen").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
//changes made this this function
function QRegisterScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#52307c",
        flex: 1,
        paddingTop:
          Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
      }}
    >
      <Image
        style={{ width: 100, height: 97, alignSelf: "center" }}
        fadeDuration={1000}
        source={require("../Images/logo_transparent.png")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Ionicons name="ios-arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <View style={{ flex: 1, paddingHorizontal: "2%" }}>
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
        <TouchableOpacity
          onPress={() => navigation.navigate("RecoveryCode")}
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
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
//nothing below here

export default QRegisterScreen;
