import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <Text>{props.title}</Text>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text>{props.duration}m</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    width: " 100%",
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
  },

  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "90%",
  },

  mealDetails: {},
});
