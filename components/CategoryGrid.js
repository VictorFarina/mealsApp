import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

import React from "react";
const CategoryGrid = (props) => {
  let TouchbleCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchbleCmp = TouchableNativeFeedback;
  }

  return (
    <TouchbleCmp onPress={props.onSelect} style={{ ...styles.container, ...{ backgroundColor: props.color }}}>
        <Text style={styles.title}>{props.title}</Text>
    </TouchbleCmp>
  );
};

export default CategoryGrid;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    flex: 1,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    marginHorizontal: 5,
  },

 

  title: {
    fontSize: 22,
    fontFamily: "open-sans-bold",
  },
});
