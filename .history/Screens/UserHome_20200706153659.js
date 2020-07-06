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

export default