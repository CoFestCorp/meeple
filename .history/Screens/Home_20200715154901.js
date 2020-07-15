import "react-native-gesture-handler";
import * as React from "react";
import {
  Image,
  SafeAreaView,
  Button,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import App from "../App";

import styles from "../css";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 2,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 375, height: 472 }}
        fadeDuration={1000}
        source={require("../Images/logo_transparent.png")}
      />

      <View style={{ flex: 1, justifyContent: "space-between", paddingBottom }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={{
            width: 305,
            height: 58,
            backgroundColor: "#7041EE",
            borderRadius: 24,
            
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 25,
              fontWeight: "bold",
              left: 90,
              bottom: -20,
              lineHeight: 25,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            width: 305,
            height: 58,
            backgroundColor: "#E5E5E5",
            borderRadius: 24,
            shadowOffset: { width: 5, height: 5 },
            shadowColor: "black",
            shadowOpacity: 0.1,
          }}
        >
          <Text style={styles.loginT}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.5, marginVertical: "8%" }}>
        <Text style={{ fontSize: 20 }}>Forgotten password ?</Text>

        <Button
          onPress={() => navigation.navigate("QRegister")}
          title="Recovery"
        ></Button>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
