import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    StyleSheet,
    Image,
    SafeAreaView,
    Button,
    View,
    Text,
    TouchableOpacity,
    AppRegistry,
} from "react-nativ
import stylesApp from "./css";

function UserHomeScreen({ navigation }) {
    return (
        <View
            leftSidebar={this.renderLeftSidebar()}
            rightSidebar={this.renderRightSidebar()}
            style={{ flex: 1, backgroundColor: 'black' }}>
            {this.renderContent()}
        </View>
    )
}
