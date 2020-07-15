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
  StatusBar,
} from "react-native";
import styles from "../css";
import App from "../App";
import { Ionicons } from "@expo/vector-icons";

function RecoveryCodeScreen({ navigation }) {
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
      <View style={{ flex: 1, paddingHorizontal: "2%" }}>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontWeight: "bold",
            paddingVertical: "5%",
          }}
        >
          Recovery code
        </Text>
        <Text style={{ color: "white", fontSize: 16, marginBottom: "15%" }}>
          Please enter the recovery code you received via email / text.
        </Text>

        <TextInput
          placeholder="  Recovery code"
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
          onPress={() => navigation.navigate("NewPassword")}
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

export default RecoveryCodeScreen;
