import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView } from "react-native";
import styles from "../css";
import SwipeCard from "../Components/SwipeCards.js";

function UserHomeScreen({ navigation }) {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <SwipeCard style={styles.swipe}/>
    </View>
      <TouchableOpacity style={styles.YES}>

    </TouchableOpacity>
      <TouchableOpacity style={styles.YES}>

      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default UserHomeScreen;
