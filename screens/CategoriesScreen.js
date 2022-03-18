import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Button,
  TouchableOpacity,
  Platform
} from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
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
  headerStyle:{
    backgroundColor:Platform.OS==='android' ? Colors.primary : Colors.primary
  },
  headerTintColor:Platform.OS==='android' ? 'white' : 'white'
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  gridItem: {
    borderRadius: 10,
    flex: 1,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 5,
    width: 50,
    height: 50,
    shadowColor: "#000000",
  },
});
