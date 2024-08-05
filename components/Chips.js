import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";

const Chips = () => {
  const DATA = [
    {
      id: 1,
      title: "Dog",
    },
    {
      id: 2,
      title: "Cat",
    },
    {
      id: 3,
      title: "For Adoption",
    },
    {
      id: 4,
      title: "For Sale",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = (id) => {
    setSelectedItem(id);
  };

  const afterclick = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          styles.chips,
          selectedItem === item.id && styles.chipsafterselect,
        ]}
        onPress={() => handleItemPress(item.id)}
      >
        {/* <Text style={styles.chips}> {item.title}</Text> */}
        <Text
          style={
            selectedItem === item.id ? styles.afterchipselect : styles.chipstext
          }
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      horizontal
      data={DATA}
      renderItem={afterclick}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  chips: {
    margin: 8,
    marginLeft: 22,
    // borderColor: "black",
    backgroundColor: "white",
    color: "#7462FF",
    borderRadius: 18,
    // borderWidth: 6,
    padding: 10,
    shadowColor: "#7462FF",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  chipsafterselect: {
    backgroundColor: "#7462FF",
    color: "#ffffff",
    margin: 6,
    borderRadius: 18,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  chipstext: {
    color: "#7462FF",
  },

  afterchipselect: {
    color: "#ffffff",
  },
});

export default Chips;
