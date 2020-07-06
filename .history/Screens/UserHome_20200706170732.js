import "react-native-gesture-handler";
import * as React from "react";
import {
    View,
    Text,
    Button,
    TouchableOpacity, 
    Image 
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function UserHomeScreen({ navigation }) {
    return (
        <View>
            
        </View>
    );
}


export default UserHomeScreen;