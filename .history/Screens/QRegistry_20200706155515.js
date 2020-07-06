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




function QRegisterScreen() {
    return (
        <View style={styles.QRegScreen}>
            <Image
                style={styles.Recoverylogo}
                fadeDuration={1000}
                source={require("./Images/logo_transparent.png")}
            />

            <Text style={styles.RecoveryText}>Password Recovery</Text>
            <Text style={styles.RecoveryInfo}>
                If you have lost your account password, simply enter your email address
                and phone number below. Directions for reseting your password will be
                emailed to the address provided.
      </Text>
            <Text style={styles.EmailTitle}>Email address</Text>
            <TextInput style={styles.EmailInput}></TextInput>

            <Text style={styles.PhoneNumber}>Phone number</Text>
            <TextInput style={styles.PhoneInput}></TextInput>

            <TouchableOpacity
                onPress={() => alert("This does absoultly nothing !")}
                style={styles.RecoverySubmit}
            >
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

export default QRegisterScreen;