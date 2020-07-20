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

import App from "../App";

function PhoneNumberScreen({ navigation }) {
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
          Phone Number Recovery
        </Text>
        <Text style={{ color: "white", fontSize: 16, marginBottom: "15%" }}>
          This will require your phone number that was linked with your account,
          simply enter below to receive a reset code via text.
        </Text>

        <TextInput
          placeholder="Phone number"
          style={{
            width: 305,
            height: 58,
            backgroundColor: "white",
            borderRadius: 24,
            paddingHorizontal: 10,
            marginBottom: "5%",
          }}
        />
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

export default PhoneNumberScreen;
