import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SideMenu from 'react-native-side-menu';
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
import stylesLogIn from "./css";
import styles from "./css";

TouchableOpacity.defaultProps = { activeOpacity: 0.1 };

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        fadeDuration={1000}
        source={require("./Images/logo_transparent.png")}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={styles.login}
      >
        <Text style={styles.loginG}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.login2}
      >
        <Text style={styles.loginT}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.btm}>
        <Text style={{ fontSize: 20 }}>Forgotten password ?</Text>
      </View>

      <View style={styles.btm2}>
        <Button
          onPress={() => navigation.navigate("QRegister")}
          title="Recovery"
        ></Button>
      </View>
    </SafeAreaView>
  );
}

function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={stylesLogIn.container}>
      <Image
        style={styles.loginLogo}
        fadeDuration={1000}
        source={require("./Images/logo_transparent.png")}
      />
      <View style={styles.details}>
        <TextInput placeholder="username or email" style={styles.input} />
        <TextInput placeholder="password" style={styles.input} />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("UserHome")}
        style={styles.login3}
      >
        <Text style={styles.loginT2}>Log in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function RegisterScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Register Screen</Text>
    </View>
  );
}

function QRegisterScreen() {
  return (
    <View style={styles.QRegScreen}>
      <Image
        style={styles.Recoverylogo}
        fadeDuration={1000}
        source={require("./Images/logo_transparent.png")}
      />

      <Text style={styles.RecoveryText}>Password Recovery</Text>
      <Text style={styles.RecoveryInfo}>
        If you have lost your account password, simply enter your email address
        and phone number below. Directions for reseting your password will be
        emailed to the address provided.
      </Text>
      <Text style={styles.EmailTitle}>Email address</Text>
      <TextInput style={styles.EmailInput}></TextInput>

      <Text style={styles.PhoneNumber}>Phone number</Text>
      <TextInput style={styles.PhoneInput}></TextInput>

      <TouchableOpacity
        onPress={() => alert("This does absoultly nothing !")}
        style={styles.RecoverySubmit}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

function UserHomeScreen({ navigation }) {
    return *
      <Sidebar
        leftSidebar={this.renderLeftSidebar()}
        rightSidebar={this.renderRightSidebar()}
        style={{ flex: 1, backgroundColor: 'black' }}>
        {this.renderContent()}
      </Sidebar>
    )
  }


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
