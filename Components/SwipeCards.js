import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  PanResponder,
  TouchableOpacity,
} from "react-native";
import styles from "../css";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const Users = [
  { id: "1", uri: require("../Images/1.jpg") },
  { id: "2", uri: require("../Images/2.jpg") },
  { id: "3", uri: require("../Images/3.jpg") },
  { id: "4", uri: require("../Images/4.jpg") },
  { id: "5", uri: require("../Images/5.jpg") },
];
export default class SwipeCard extends React.Component {
  constructor() {
    super();
    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0,
    };
    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ["-10deg", "0deg", "10deg"],
      extrapolate: "clamp",
    });
    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate,
        },
        ...this.position.getTranslateTransform(),
      ],
    };
    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: "clamp",
    });
    this.nopeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: "clamp",
    });
    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: "clamp",
    });
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: "clamp",
    });
  }
  render() {
    return Users.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null;
      } else if (i == this.state.currentIndex) {
        return (
          <>
            <Animated.View
              {...this.PanResponder.panHandlers}
              key={i}
              style={[
                this.rotateAndTranslate,
                {
<<<<<<< HEAD
                  height: "75%",
=======
                  height: SCREEN_HEIGHT - 120,
>>>>>>> parent of d3cf729f... Merge branch 'master' of https://github.com/CoFestCorp/meeple
                  width: SCREEN_WIDTH,
                  padding: 10,
                  position: "absolute",
                },
              ]}
            >
              <Animated.View
                style={{
                  opacity: this.likeOpacity,

                  transform: [{ rotate: "-30deg" }],
                  position: "absolute",
                  top: 50,
                  left: 40,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: "#22d44b",
                    color: "#22d44b",
                    fontSize: 32,
                    fontWeight: "800",
                    padding: 10,
                  }}
                >
                  LIKE
                </Text>
              </Animated.View>
              <Animated.View
                style={{
                  opacity: this.nopeOpacity,
                  transform: [{ rotate: "30deg" }],
                  position: "absolute",
                  top: 50,
                  right: 40,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: "red",
                    color: "red",
                    fontSize: 32,
                    fontWeight: "800",
                    padding: 10,
                  }}
                >
                  NOPE
                </Text>
              </Animated.View>
              <Image
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: "cover",
                  borderRadius: 20,
                }}
                source={item.uri}
              />
            </Animated.View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
<<<<<<< HEAD
                  bottom: "5%",
=======
                  width: 60,
                  height: 60,

                  margin: 30,
                  bottom: -650,
                  left: 200,
>>>>>>> parent of d3cf729f... Merge branch 'master' of https://github.com/CoFestCorp/meeple
                }}
              >
                <Icon name="heart-circle" size={60} color="#22d44b" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
<<<<<<< HEAD
                  bottom: "5%",
=======
                  width: 60,
                  height: 60,
                  margin: 30,
                  bottom: -650,
                  left: -100,
>>>>>>> parent of d3cf729f... Merge branch 'master' of https://github.com/CoFestCorp/meeple
                }}
              >
                <Entypo name="circle-with-cross" size={60} color="red" />
              </TouchableOpacity>
            </View>
          </>
        );
      } else {
        return (
          <Animated.View
            key={i}
            style={{
              opacity: this.nextCardOpacity,
              transform: [{ scale: this.nextCardScale }],
<<<<<<< HEAD
              height: "75%",
=======
              height: SCREEN_HEIGHT - 120,
>>>>>>> parent of d3cf729f... Merge branch 'master' of https://github.com/CoFestCorp/meeple
              width: SCREEN_WIDTH,
              padding: 10,
              position: "absolute",
            }}
          >
            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: "cover",
                borderRadius: 20,
              }}
              source={item.uri}
            />
          </Animated.View>
        );
      }
    }).reverse();
  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4,
          }).start();
        }
      },
    });
  }
}
