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
        <Sidebar
            bar={<div>Amazing Sidebar</div>}
            opened={this.state.opened}
            onClose={() => {
                this.setState({ opened: false })
            }}
            onOpen={() => {
                this.setState({ opened: true })
            }}
            size={300}
        />
    );
}


export default UserHomeScreen;