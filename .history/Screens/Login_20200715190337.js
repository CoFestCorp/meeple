import "react-native-gesture-handler";
import * as React from "react";

import {
  Image,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  Item,
  Input,
  Logo,
} from "react-native";
import styles from "../css";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import PasswordToggleInput from "../Components/PasswordToggleIn.js";


function LoginScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 40,
          flex: 2,
          paddingTop: "10%",
          fontWeight: "bold",
        }}
      >
        Log In
      </Text>
      <View style={{ flex: 2 }}>
        <TextInput
          placeholder=" Username or email"
          style={{
            width: 305,
            height: 58,
            backgroundColor: "#E5E5E5",
            borderRadius: 24,
            paddingHorizontal: "2%",
          }}
        />
        <PasswordToggleInput />
      </View>
      <View style={{ flex: 3 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("UserHome")}
          style={{
            width: 305,
            height: 58,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#7041EE",
            borderRadius: 24,
            marginVertical: "30%",
          }}
        >
          <Text style={styles.loginT2}>Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
