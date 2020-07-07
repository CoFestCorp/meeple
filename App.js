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
        <Stack.Screen
          styles={stylesApp.title}
          name="RecoveryCode"
          component={RecoveryCodeScreen}
        />
        <Stack.Screen
          styles={stylesApp.title}
          name="PhoneNumberRecovery"
          component={PhoneNumberScreen}
        />
        <Stack.Screen
          styles={stylesApp.title}
          name="NewPassword"
          component={NewPasswordScreenScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
