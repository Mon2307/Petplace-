import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const Searchbar = () => {
  const onclickOfFilter = () => {
    console.log("Filter Clicked");
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.searchContainer}>
        <Image
          source={require("../assets/Images/search.png")}
          style={{ width: 30, height: 30 }}
        />

        <TextInput style={styles.input} placeholder="Search for a Pet" />
        <TouchableOpacity onPress={() => onclickOfFilter()}>
          <Image
            source={require("../assets/Images/filter.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.searchbarText}> Nearby Pets</Text>
      </View>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "lightgrey",
    borderRadius: 16,
    padding: 14,
    width: 350,
    margin: 14,
    marginTop: 0,
  },

  searchbarText: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 12,
  },
  input: {
    width: 200,
  },
});
