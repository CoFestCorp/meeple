import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SideMenu from 'react-native-side-menu';
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

function UserHomeScreen({ navigation }) {
    return (
        <Sidebar
            leftSidebar={this.renderLeftSidebar()}
            rightSidebar={this.renderRightSidebar()}
            style={{ flex: 1, backgroundColor: 'black' }}>
            {this.renderContent()}
        </Sidebar>
    )
}