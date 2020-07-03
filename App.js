import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
  View,
  Text,
  TouchableOpacity,
  AppRegistry
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import stylesApp from './css';
import stylesLogIn from './css';
import styles from './css';




TouchableOpacity.defaultProps = { activeOpacity: 0.1 };






function HomeScreen({ navigation }) {
  return (

    <SafeAreaView style={styles.container}>
      <Image style={styles.logo}
        fadeDuration={1000}
        source={require('./Images/logo_transparent.png')}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.login}>
        <Text style={styles.loginG}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.login2}>


        <Text style={styles.loginT}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.btm}>
        <Text style={{ fontSize: 20, }}>New around here ?</Text>

      </View>
      <View style={styles.btm2}>
        <Button onPress={() => navigation.navigate('QRegister')} title="Sign up"></Button>
      </View>
    </SafeAreaView>
  );
}

function LoginScreen() {
  return (
    <SafeAreaView style={stylesLogIn.container}>
      <View style={styles.login2}>
        <TextInput style={styles.loginU}></TextInput>
      </View>
      <View style={styles.login2}>
        <TextInput style={styles.loginP}></TextInput>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.login2}>
        <Text style={styles.loginT}>Log in</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

function RegisterScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Register Screen</Text>
    </View>
  );
}

function QRegisterScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>QRegister Screen</Text>
    </View>
  );
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
        <Stack.Screen options={{ headerShown: false }} styles={stylesApp.title} name="Home" component={HomeScreen} />
        <Stack.Screen styles={stylesApp.title} name="Login" component={LoginScreen} />
        <Stack.Screen styles={stylesApp.title} name="QRegister" component={QRegisterScreen} />
        <Stack.Screen styles={stylesApp.title} name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;