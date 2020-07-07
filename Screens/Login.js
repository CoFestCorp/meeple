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

function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.loginLogo}
        fadeDuration={1000}
        source={require("../Images/logo_transparent.png")}
      />
      <View style={styles.details}>
        <TextInput placeholder="    username or email" style={styles.input} />
        <TextInput
          placeholder="password"
          style={styles.input}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.icon}>
          <Icon name="eye" size={25} />
        </TouchableOpacity>
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
