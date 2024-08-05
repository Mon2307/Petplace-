import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const Inputs = ({ title }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <TextInput style={styles.input} placeholder={title}></TextInput>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 50,

    backgroundColor: "white",
    color: "#7462FF",
    borderRadius: 40,
    // borderWidth: 6,
    // padding: 30,
    shadowColor: "#7462FF",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    width: 200,
    height: 30,
    marginLeft: 28,
    marginTop: 10,
  },
});

export default Inputs;
