import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserHomeScreen from './Screens/UserHome';
import RegisterScreen from './Screens/Registry';
import LoginScreen from './Screens/Login';
import HomeScreen from './Screens/Home';
import {
  TouchableOpacity,
  AppRegistry
} from "react-native";

import stylesApp from "./css";


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
AppRegistry.registerComponent('Appname', () => App);
export default App;
