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

function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.signupLogo}
        fadeDuration={1000}
        source={require("../Images/logo_transparent.png")}
      />
      <View style={styles.details}>
        <TextInput placeholder="  Your full name" style={styles.input} />
        <TextInput placeholder="  Choose a username" style={styles.input} />
        <TextInput placeholder="DOB DD/MM/YYYY" style={styles.input} />
        <TextInput placeholder="Your email" style={styles.input} />
        <TextInput
          placeholder="Select a password"
          style={styles.input}
          secureTextEntry={true}
        />
        <TextInput
          placeholder="Confirm password"
          style={styles.input}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Verify")}
          style={styles.signup}
        >
          <Text style={styles.loginT2}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default RegisterScreen;
