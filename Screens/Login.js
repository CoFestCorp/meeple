import "react-native-gesture-handler";
import * as React from "react";

import {
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

import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import PasswordToggleInput from "../Components/PasswordToggleIn.js";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <View style={{ height: "30%", justifyContent: "space-evenly" }}>
        <TextInput placeholder=" Username or email" style={styles.input} />
        <PasswordToggleInput />
      </View>
      <View style={{ height: "45%" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("UserHome")}
          style={styles.button}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
  },
  title: {
    fontSize: 40,
    height: "25%",
    paddingVertical: "10%",
    fontWeight: "bold",
  },
  input: {
    paddingVertical: "3.5%",
    paddingRight: "50%",
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
    marginVertical: "30%",
  },
});
export default LoginScreen;
