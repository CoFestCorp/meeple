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


import styles from "./css";



function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                fadeDuration={1000}
                source={require("./Images/logo_transparent.png")}
            />

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