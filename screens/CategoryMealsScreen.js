import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((category) => category.id === catId);

  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>

      <Button
        title='See more'
        onPress={() => {
          props.navigation.navigate({
            routeName:"MealDetail" });
        }}
      />
      <Button
        title='Go Back'
        onPress={() => {
          props.navigation.goBack();
        }}
      />

    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {

  const catID = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((category) => category.id === catID);

  return {
    headerTitle: selectedCategory.title
  };

};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
