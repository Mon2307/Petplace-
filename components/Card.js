import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";

const Card = ({ cardData }) => {
  const [toggled, setToggled] = useState(false);

  const onheartClick = () => {
    // Toggle the state when TouchableOpacity is pressed
    setToggled(!toggled);
  };

  const isAdoption = cardData.adopt === "For Adoption";

  // Define styles for different scenarios
  const textStyle = isAdoption ? styles.adoptionText : styles.defaultText;

  return (
    <View>
      {/* <TouchableOpacity> */}
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <View style={styles.nameandtype}>
            <Text style={styles.name}>{cardData.name}</Text>
            <Text style={{ fontSize: 16, color: "grey" }}>{cardData.type}</Text>
          </View>
          <View style={styles.description}>
            <Text style={{ color: "#5A5A5A" }}>{cardData.race}</Text>
            {/* <Text>.</Text> */}
            <Entypo name="dot-single" size={22} color="Grey" />
            <Text style={{ color: "#5A5A5A" }}>{cardData.Gender}</Text>
            <Entypo name="dot-single" size={22} color="Grey" />
            <Text style={{ color: "#5A5A5A" }}>{cardData.Age} mo</Text>
          </View>
          <View>
            {/* <Text>{cardData.adopt}</Text> */}
            <Text style={textStyle}>₹ {cardData.adopt}</Text>
          </View>
          <View>
            <Text style={{ color: "#555555" }}>
              Distance : {cardData.Distance} Km
            </Text>
          </View>
          <View></View>
        </View>
        <View>
          <Image source={cardData.url} style={styles.image} />
          <View style={styles.foricon}>
            <TouchableOpacity onPress={() => onheartClick()}>
              {/* <Ionicons name="heart-outline" size={32} color="white" /> */}
              <Ionicons
                name={toggled ? "heart" : "heart-outline"}
                size={32}
                color={toggled ? "red" : "white"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* <View style={styles.foricon}>
          <Ionicons name="heart-outline" size={32} />
        </View> */}
      {/* </View> */}
      {/* </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    margin: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
  },
  description: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "center",
    gap: 12,
    // alignContent: "center",
    alignItems: "center",
    color: "blue",
    alignItems: "flex-start",
  },

  textContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 4,
  },

  nameandtype: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
  },
  image: {
    position: "absolute",
    bottom: -17,
    right: -16,
    zIndex: 50,
    width: 130,
    height: 160,
  },

  foricon: {
    position: "relative",
    // top: 10,
    zIndex: 80,
    bottom: -80,
  },

  adoptionText: {
    color: "#1AD671",
    fontWeight: "bold",
  },
  defaultText: {
    color: "#D61A71",
    fontWeight: "bold",
  },
});

export default Card;
