import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const catID = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(category=>category.id===catID);

  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
      <Button
        title='Back to categories'
        onPress={() => {
          props.navigation.push("Categories");
        }}
      />
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
