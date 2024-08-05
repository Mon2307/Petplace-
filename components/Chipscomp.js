import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";

const chipscomp = ({ data }) => {
  [selectedChip, setChip] = useState(null);

  const onclick = ({ item }) => {
    setChip(item.id);
  };

  return (
    <TouchableOpacity
      style={[
        selectedChip === item.id ? styles.chipsafterselect : styles.chips,
      ]}
      onPress={() => onclick(item.id)}
    >
      {/* <Text style={styles.chips}> {item.title}</Text> */}
      <Text
        style={
          selectedChip === item.id ? styles.afterchipselect : styles.chipstext
        }
      >
        {data.name}
      </Text>
    </TouchableOpacity>
  );
};

export default chipscomp;

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
