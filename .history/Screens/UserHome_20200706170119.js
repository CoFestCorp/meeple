import "react-native-gesture-handler";
import * as React from "react";
import {
    View,
    Text,
} from "react-native";
import App from "../App";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const NavigationDrawerStructure = (props) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
        //Props to open/close the drawer
        props.navigationProps.toggleDrawer();
    };


function UserHomeScreen({navigation}) {
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