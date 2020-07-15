import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserHomeScreen from "./Screens/UserHome";
import RegisterScreen from "./Screens/Registry";
import LoginScreen from "./Screens/Login";
import HomeScreen from "./Screens/Home";
import QRegisterScreen from "./Screens/QRegistry";
import { TouchableOpacity, AppRegistry } from "react-native";
import stylesApp from "./css";
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

class App extends React.Component {
  render (){
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
          options={{ headerShown: false }}
          styles={stylesApp.title}
          name="Profile"
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

export default App;
