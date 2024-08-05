import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";

const Button = () => {
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
      title: "Rabbit",
    },
    {
      id: 4,
      title: "Cow",
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
    margin: 6,
    marginLeft: 14,
    // borderColor: "black",
    backgroundColor: "white",
    color: "#7462FF",
    borderRadius: 20,
    // borderWidth: 6,
    padding: 20,
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
    borderRadius: 20,
    padding: 20,
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

export default Button;
