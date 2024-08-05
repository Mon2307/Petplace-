import DropDownPicker from "react-native-dropdown-picker";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
const Dropdown = () => {
  const [clicked, setClicked] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState("");
  const data = [
    { breed: "French Bulldog" },
    { breed: "German Shephard" },
    { breed: "Pembroke Welsh Corgi" },
  ];

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={styles.dropdowncontainer}
        onPress={() => {
          setClicked(!clicked);
        }}
      >
        <Text style={styles.text}>
          {selectedBreed == "" ? "Select Breed" : selectedBreed}
        </Text>

        {clicked ? (
          <MaterialIcons name={"expand-less"} size={20} />
        ) : (
          <MaterialIcons name={"expand-more"} size={20} />
        )}
      </TouchableOpacity>
      {clicked ? (
        <View
          style={{
            elevation: 5,
            marginTop: 20,
            height: 150,
            alignSelf: "center",
            width: "90%",
            backgroundColor: "#fff",
            borderRadius: 10,
            position: "absolute",
            zIndex: 1,
            top: 30,
            left: 10,
          }}
        >
          <FlatList
            data={data}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    width: "85%",
                    alignSelf: "center",
                    height: 50,
                    justifyContent: "center",
                    // borderBottomWidth: 0.5,
                    borderColor: "#8e8e8e",
                  }}
                  onPress={() => {
                    setSelectedBreed(item.breed);
                    setClicked(!clicked);
                  }}
                >
                  <Text style={styles.text}>{item.breed}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdowncontainer: {
    width: "90%",
    height: 50,
    borderRadius: 16,
    // alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginLeft: 10,
    padding: 16,

    shadowColor: "#7462FF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  text: {
    color: "Grey",
    fontSize: 13,
  },
});

export default Dropdown;
