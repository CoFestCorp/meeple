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
} from "react-native";
import App from "../App";
import styles from "../css";
import { Ionicons } from "@expo/vector-icons";

function VerifyScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop:
          Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
      }}
    >
      <Image
        style={{ width: "20%", height: "15%", alignSelf: "center" }}
        fadeDuration={1000}
        source={require("../Images/logo_transparent.png")}
      />

      <View style={{ paddingHorizontal: "2%" }}>
        <Text
          style={{
            color: "#9b4ae6",
            fontSize: 25,
            fontWeight: "bold",
            paddingVertical: "5%",
          }}
        >
          You're just one step away!
        </Text>
        <Text style={{ color: "#9b4ae6", fontSize: 16, marginBottom: "15%" }}>
          To verify your identity, plese enter your phone number. We will
          shortly send you a text message with a verification code.
        </Text>

        <TextInput
          placeholder="  Phone number"
          style={{
            paddingVertical: "3.5%",
            paddingRight: "50%",
            textAlignVertical: "center",
            backgroundColor: "#E5E5E5",
            borderRadius: 24,
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("VerifyCode")}
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
          <Text style={styles.loginT2}>Send Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default VerifyScreen;
