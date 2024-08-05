import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";

const Switch = () => {
  const [selectedOption, setselectedOption] = useState("Male");
  const handleOptionSelect = (option) => {
    console.log("Option selected:", option);
    setselectedOption(option);
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => handleOptionSelect("Male")}>
          <Text
            style={[
              selectedOption === "Male"
                ? styles.selectedOption
                : styles.optionText,
            ]}
          >
            Male
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => handleOptionSelect("Female")}>
          <Text
            style={[
              selectedOption === "Female"
                ? styles.selectedOption
                : styles.optionText,
            ]}
          >
            Female
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Switch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 6,
    marginTop: 6,
    margin: 12,
    shadowColor: "#7462FF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  //   text: {
  //     marginRight: 100,
  //   },

  selectedOption: {
    margin: 4,
    backgroundColor: "#7462FE",
    padding: 20,
    width: 140,
    borderColor: "black",
    // borderWidth: 4,
    borderRadius: 16,
    color: "#FFFFFF",
    alignSelf: "center",
    paddingLeft: 36,
  },
  optionText: {
    margin: 4,
    padding: 20,
    width: 120,
    borderColor: "black",
    // borderWidth: 4,
    borderRadius: 16,
    color: "#7462FE",
  },
});
