import "react-native-gesture-handler";
import * as React from "react";
import {
    StyleSheet,
    Image,
    SafeAreaView,
    Button,
    View,
    Text,
    TouchableOpacity,
    AppRegistry,
} from "react-native";
import styles from "../css";




function LoginScreen({ navigation }) {
    return (
        <SafeAreaView style={stylesLogIn.container}>
            <Image
                style={styles.loginLogo}
                fadeDuration={1000}
                source={require("../Images/logo_transparent.png")}
            />
            <View style={styles.details}>
                <TextInput placeholder="username or email" style={styles.input} />
                <TextInput placeholder="password" style={styles.input} />
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