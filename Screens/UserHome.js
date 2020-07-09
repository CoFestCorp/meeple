import "react-native-gesture-handler";
import * as React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import styles from "../css";
import SwipeCard from "../Components/SwipeCards.js";

function UserHomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}></View>
        <SwipeCard style={styles.swipe} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.Yes} />
          <TouchableOpacity style={styles.No} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default UserHomeScreen;
