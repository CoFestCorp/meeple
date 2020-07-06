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