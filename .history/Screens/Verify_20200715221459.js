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
import { Ionicons } from '@expo/vector-icons';

function VerifyScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.loginLogo}
        fadeDuration={1000}
        source={require("../Images/logo_transparent.png")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Ionicons name="ios-arrow-back" size={30} color="black" style={{top:-90}} />
      </TouchableOpacity>
      <View style={styles.RegBox}>
        <Text style={styles.RegText}>You're just one step away!</Text>
        <Text style={styles.RegInfo}>
          To verify your identity, plese enter your phone number. We will
          shortly send you a text message with a verification code.
        </Text>
      </View>

      <TextInput placeholder="  Phone number" style={styles.input} />
      <TouchableOpacity
        onPress={() => navigation.navigate("VerifyCode")}
        style={styles.signup}
      >
        <Text style={styles.loginT2}>Send Code</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default VerifyScreen;
