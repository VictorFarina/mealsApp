import { StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { Colors } from "react-native/Libraries/NewAppScreen";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
        style={styles.gridItem}>
        <Text>{itemData.item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  gridItem: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    flex: 1,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    marginHorizontal: 5,
    width: 50,
    height: 100,
    shadowColor: "#000000",
  },
});
