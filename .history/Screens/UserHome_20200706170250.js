import "react-native-gesture-handler";
import * as React from "react";
import {
    View,
    Text,
    Button,
} from "react-native";
import App from "../App";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const NavigationDrawerStructure = (props) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
        //Props to open/close the drawer
        props.navigationProps.toggleDrawer();
    };
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => toggleDrawer()}>
                {/*Donute Button Image */}
                <Image
                    source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
                    style={{ width: 25, height: 25, marginLeft: 5 }}
                />
            </TouchableOpacity>
        </View>
    );
}

function UserHomeScreen({ navigation }) {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: '#e91e63',
                    itemStyle: { marginVertical: 5 },
                }}>
                <Drawer.Screen
                    name="FirstPage"
                    options={{ drawerLabel: 'First page Option' }}
                    component={firstScreenStack} />
                <Drawer.Screen
                    name="SecondPage"
                    options={{ drawerLabel: 'Second page Option' }}
                    component={secondScreenStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default UserHomeScreen;