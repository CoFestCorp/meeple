import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SideMenu from 'react-native-side-menu';
import UserHomeScreen from './Screens/UserHome';
import RegisterScreen from './Screens/Registry';
import LoginScreen from './Screens/Login';
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
import styles from "./css";

TouchableOpacity.defaultProps = { activeOpacity: 0.1 };


class Hidden extends React.Component {
  render() {
    return null;
  }
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          styles={stylesApp.title}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          styles={stylesApp.title}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          styles={stylesApp.title}
          name="QRegister"
          component={QRegisterScreen}
        />
        <Stack.Screen
          styles={stylesApp.title}
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          styles={stylesApp.title}
          name="UserHome"
          component={UserHomeScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
