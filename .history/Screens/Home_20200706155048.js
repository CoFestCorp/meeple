import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SideMenu from 'react-native-side-menu';
import UserHomeScreen from './Screens/UserHome';
import RegisterScreen from './Screens/Registry';
import LoginScreen from './Screens/Login';
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
import { TextInput } from "react-native-gesture-handler";
import stylesApp from "./css";
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