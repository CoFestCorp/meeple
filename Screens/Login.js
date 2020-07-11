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
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 40,
          right: -155,
          paddingTop: 40,
          paddingBottom: 100,
          fontWeight: "bold",
        }}
      >
        Log In
      </Text>
      <View style={styles.details}>
        <TextInput placeholder="  Username or email" style={styles.input} />
        <PasswordToggleInput />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("UserHome")}
        style={styles.login3}
      >
        <Text style={styles.loginT2}>Log in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default LoginScreen;
