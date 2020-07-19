import "react-native-gesture-handler";
import * as React from "react";
import {
  Image,
  SafeAreaView,
  Button,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import App from "../App";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: "60%", height: "55%" }}
        fadeDuration={1000}
        source={require("../Images/logo_transparent.png")}
      />

      <View style={{ height: "25%", justifyContent: "space-evenly" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={{
            backgroundColor: "#7041EE",
            borderRadius: 24,
          }}
        >
          <Text style={styles.button1}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            backgroundColor: "#E5E5E5",
            borderRadius: 24,
          }}
        >
          <Text style={styles.button2}>Log in</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: "20%", justifyContent: "center" }}>
        <Text style={{ fontSize: 20 }}>Forgotten password ?</Text>
        <Button
          onPress={() => navigation.navigate("QRegister")}
          title="Recovery"
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  button1: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    paddingVertical: "3.5%",
    paddingHorizontal: "25%",
  },
  button2: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    paddingVertical: "3.5%",
    paddingHorizontal: "25%",
  },
});
export default HomeScreen;
