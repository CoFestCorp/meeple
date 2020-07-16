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
<<<<<<< HEAD

function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 40, right: -140, paddingTop: 40, paddingBottom: 40, fontWeight: "bold", }}>
=======
import { Ionicons } from '@expo/vector-icons';

function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Ionicons name="ios-arrow-back" size={30} color="black" style={{ right: 180, top: 15 }} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 40,
          paddingVertical: "10%",

          fontWeight: "bold",
        }}
      >
>>>>>>> parent of 9fb1ffbf... resized with platform
        Sign Up
      </Text>
      <View style={styles.details}>
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
<<<<<<< HEAD
          style={{
            width: 305,
            height: 58,
            bottom: "1%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#7041EE",
            borderRadius: 24,
          }}
=======
          style={styles.signup}
>>>>>>> parent of d3cf729f... Merge branch 'master' of https://github.com/CoFestCorp/meeple
        >
          <Text style={styles.loginT2}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default RegisterScreen;
