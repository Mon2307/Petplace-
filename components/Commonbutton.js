import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const CustomButton = ({ title, customStyle, textStyle, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonStyle, customStyle, textStyle]}
      // style={customStyle}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

// const onPress = () => {};

export default CustomButton;

const styles = StyleSheet.create({
  buttonStyle: {
    margin: 16,
    padding: 20,
    paddingLeft: 60,
    paddingRight: 60,
    borderRadius: 20,
    backgroundColor: "hsla(247, 100%, 69%, 1)",
  },

  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
