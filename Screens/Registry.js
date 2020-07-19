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

function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 40,
          height: "15%",
          paddingVertical: "5%",
          fontWeight: "bold",
        }}
      >
        Sign Up
      </Text>
      <View style={{ height: "85%", justifyContent: "space-evenly" }}>
        <TextInput placeholder="  Your full name" style={styles.input} />
        <TextInput placeholder="  Choose a username" style={styles.input} />
        <TextInput placeholder="  DOB DD/MM/YYYY" style={styles.input} />
        <TextInput placeholder="  Your email" style={styles.input} />
        <TextInput
          placeholder="  Select a password"
          style={styles.input}
          secureTextEntry={true}
        />
        <TextInput
          placeholder="  Confirm password"
          style={styles.input}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Verify")}
          style={styles.button}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>
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
    backgroundColor: "#FFFFFF",
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

export default RegisterScreen;
