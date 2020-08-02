import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserHomeScreen from "./Screens/UserHome";
import RegisterScreen from "./Screens/Registry";
import LoginScreen from "./Screens/Login";
import HomeScreen from "./Screens/Home";
import QRegisterScreen from "./Screens/QRegistry";
import Main from "./Screens/Main";
import { TouchableOpacity, AppRegistry, StyleSheet } from "react-native";

import RecoveryCodeScreen from "./Screens/RecoveryCode";
import PhoneNumberScreen from "./Screens/PhoneNumberRecovery";
import NewPasswordScreenScreen from "./Screens/NewPassword";
import VerifyScreen from "./Screens/Verify";
import VerifyCodeScreen from "./Screens/VerifyCode";
import ChatScreen from "./Screens/ChatScreen";
import Profile from "./Screens/Profile";
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
          options={{ headerShown: false }}
          styles={stylesApp.title}
          s
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          styles={stylesApp.title}
          name="QRegister"
          component={QRegisterScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          styles={stylesApp.title}
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          styles={stylesApp.title}
          name="Verify"
          component={VerifyScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          styles={stylesApp.title}
          name="VerifyCode"
          component={VerifyCodeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          styles={stylesApp.title}
          name="UserHome"
          component={UserHomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          styles={stylesApp.title}
          name="Main"
          component={Main}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          styles={stylesApp.title}
          name="RecoveryCode"
          component={RecoveryCodeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          styles={stylesApp.title}
          name="PhoneNumberRecovery"
          component={PhoneNumberScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          styles={stylesApp.title}
          name="NewPassword"
          component={NewPasswordScreenScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          styles={stylesApp.title}
          name="ChatScreen"
          component={ChatScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          styles={stylesApp.title}
          name="Profile"
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const stylesApp = StyleSheet.create({
  title: {
    marginTop: 50,
  },
});
export default App;
