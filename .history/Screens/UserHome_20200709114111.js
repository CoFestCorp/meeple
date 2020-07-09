import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView } from "react-native";
import styles from "../css";
import SwipeCard from "../Components/SwipeCards.js";

function UserHomeScreen({ navigation }) {
  return (
    <SafeAreaView>
    <View style={styles.container}>
        <SwipeCard onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.state.animatedValue } } }]
        )} style={styles.swipe}/>
    
      <TouchableOpacity style={styles.Yes}>

    </TouchableOpacity>
      <TouchableOpacity style={styles.No}>

      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default UserHomeScreen;
