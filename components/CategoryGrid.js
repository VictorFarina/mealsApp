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
    <View style={styles.container}>
      <TouchbleCmp style={styles.gridItem} onPress={props.onSelect}>
        <View style={{ backgroundColor: props.color }}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchbleCmp>
    </View>
  );
};

export default CategoryGrid;

const styles = StyleSheet.create({

  container:{
    flex: 1,
    width: 50,
    height: 200,
  },
  gridItem: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    marginHorizontal: 5,

    shadowColor: "#000000",
  },

  title: {
    textAlign: "right",
    fontSize: 22,
    fontFamily: "open-sans-bold",
  },
});
