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

function VerifyCodeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.loginLogo}
        fadeDuration={1000}
        source={require("../Images/logo_transparent.png")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="ios-arrow-back" size={30} color="black" style={{ top: -130, left: 15 }} />
        </TouchableOpacity>
      
      <View style={styles.RegBox}>
        <Text style={styles.RegText}>Verification code</Text>
        <Text style={styles.RegInfo}>
          Please enter the verification code you received via text.
        </Text>
      </View>
      <TextInput placeholder="Verification code" style={styles.input} />
      <TouchableOpacity
        onPress={() => navigation.navigate("UserHome")}
        style={styles.signup}
      >
        <Text style={styles.loginT2}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default VerifyCodeScreen;
