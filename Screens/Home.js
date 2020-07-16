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
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                fadeDuration={1000}
                source={require("../Images/logo_transparent.png")}
            />

<<<<<<< HEAD
            <TouchableOpacity
                onPress={() => navigation.navigate("Register")}
                style={styles.login}
            >
                <Text style={styles.loginG}>Get Started</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={styles.login2}
            >
                <Text style={styles.loginT}>Log in</Text>
            </TouchableOpacity>
            <View style={styles.btm}>
                <Text style={{ fontSize: 20 }}>Forgotten password ?</Text>
            </View>
=======
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={{
            width: 305,
            height: 58,
            backgroundColor: "#7041EE",
            borderRadius: 24,
            bottom: 10
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
>>>>>>> parent of 9fb1ffbf... resized with platform

            <View style={styles.btm2}>
                <Button
                    onPress={() => navigation.navigate("QRegister")}
                    title="Recovery"
                ></Button>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;