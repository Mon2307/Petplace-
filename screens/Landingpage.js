import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import CustomButton from "../components/Commonbutton";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Homepage from "./Homepage";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Stack from "../routes/Stack";

const Landingpage = ({ navigation }) => {
  const onClickOfText = () => {
    Alert.alert("Navigating to Home");
    navigation.navigate("Home");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../assets/Images/landingimage.png")}
          style={styles.image}
        />

        <Text style={styles.text}>Ready to make </Text>
        <Text style={styles.text}>a new friend?</Text>
        <View style={styles.description}>
          <Text style={{ color: "grey" }}>
            All pets are waiting to make you{" "}
          </Text>
          <Text style={{ color: "grey" }}> their new friend</Text>
        </View>
        <View>
          <CustomButton
            title={"Continue with Google"}
            customStyle={{
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
            textStyle={{ color: "black" }}
          />
        </View>

        <View>
          <CustomButton title={"Continue with Email"} />
        </View>
        <View>
          {/* <Text> Continue without Login</Text> */}
          <Text onPress={onClickOfText} style={{ margin: 16 }}>
            Continue without Login
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Landingpage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    // flex: 1,
    justifyContent: "center",
  },

  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {
    margin: 10,
    alignItems: "center",
    // color: "grey",
    // justifyContent: "space-between",
  },
});
