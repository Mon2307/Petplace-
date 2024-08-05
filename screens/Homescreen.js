import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";

import Homepage from "./Homepage";
export default function HomeScreen({ navigation }) {
  const onClickOffirstCard = () => {
    // Alert.alert('Card Clicked', 'You clicked the card!');
    navigation.navigate(Homepage);
  };

  const onClickOfSecondCard = () => {
    // Alert.alert('Card Clicked', 'You clicked the card!');
    navigation.navigate("Second");
  };

  return (
    <View>
      <SafeAreaView>
        <Text style={{ margin: 40 }}>One Place for Pet Family! </Text>
      </SafeAreaView>
      <View style={styles.imageStyle}>
        <Image
          source={require("../assets/Images/paw.png")}
          style={{ width: 100, height: 100, margin: 40 }}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.textStyle} onPress={onClickOffirstCard}>
          I want to Adopt a pet
        </Text>
      </View>
      <View style={styles.card} onPress={onClickOfSecondCard}>
        <Text style={styles.textStyle}>I have a pet for Adoption</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0ffff",
    borderRadius: 8,
    padding: 30,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  textStyle: {
    color: "#8b008b",
  },
  imageStyle: {
    alignSelf: "center",
    margin: 60,
  },
});
