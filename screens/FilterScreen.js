import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FilterScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>FilterScreen</Text>
    </View>
  );
};

FilterScreen.navigationOptions = {
  headerTitle: "Filter Meals",
};

export default FilterScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
