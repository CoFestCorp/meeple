import "react-native-gesture-handler";
import * as React from "react";
import {
    View,
    Text,
    Button,
    TouchableOpacity, 
    Image 
} from "react-native";
import SideMenu from 'react-native-side-menu';

const SideMenu = require('react-native-side-menu');


function UserHomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to React Native!
        </Text>
            <Text style={styles.instructions}>
                To get started, edit index.ios.js
        </Text>
            <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
        </View>
    );
}


export default UserHomeScreen;