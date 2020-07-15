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
import { Ionicons } from "@expo/vector-icons";

function VerifyCodeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Image
        style={{ width: 100, height: 97, alignSelf: "center" }}
        fadeDuration={1000}
        source={require("../Images/logo_transparent.png")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Verify")}>
        <Ionicons
          name="ios-arrow-back"
          size={30}
          color="black"
          style={{ top: -130, left: 15 }}
        />
      </TouchableOpacity>
      <View style={{ flex: 1, paddingHorizontal: "2%" }}>
        <Text
          style={{
            color: "#9b4ae6",
            fontSize: 25,
            fontWeight: "bold",
            paddingVertical: "5%",
          }}
        >
          Verification code
        </Text>
        <Text style={{ color: "#9b4ae6", fontSize: 16, marginBottom: "15%" }}>
          Please enter the verification code you received via text.
        </Text>

        <TextInput placeholder="Verification code" style={styles.input} />
        <TouchableOpacity
          onPress={() => navigation.navigate("UserHome")}
          style={{
            width: 305,
            height: 58,
            marginTop: "40%",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#7041EE",
            borderRadius: 24,
          }}
        >
          <Text style={styles.loginT2}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default VerifyCodeScreen;
