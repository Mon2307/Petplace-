import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
// import { Camera, CameraType } from "expo-camera";
import { CameraView, useCameraPermissions, CameraType } from "expo-camera";

import { useIsFocused } from "@react-navigation/native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import CustomButton from "../components/Commonbutton";
import Camera from "./Camera";
import { SafeAreaView } from "react-native-safe-area-context";

const Photos = ({ navigation }) => {
  const onClickOfBack = () => {
    navigation.goBack();
  };
  const openCamera = () => {
    console.log("In camerafn");
    navigation.navigate("Camera");
    // return <Camera />;
  };

  return (
    // <View>
    //   <SafeAreaView>
    //     <Button onPress={openCamera} title="Take Picture" />
    //   </SafeAreaView>
    // </View>
    <View>
      <SafeAreaView>
        <TouchableOpacity onPress={() => onClickOfBack()}>
          <View style={styles.forback}>
            <Ionicons name={"arrow-back"} size={34} />
          </View>
        </TouchableOpacity>

        <View style={styles.heading}>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 22 }}>
            Add Pictures
          </Text>
          <Text>Step 2 of 2</Text>
        </View>
      </SafeAreaView>
      <View style={styles.Container}>
        <View style={styles.both}>
          <TouchableOpacity onPress={() => openCamera()}>
            <View style={styles.iconContainer}>
              <Entypo name={"plus"} size={32} color={"blue"} />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Image
            source={require("../assets/Images/default.jpg")}
            style={{ width: 100, height: 108, borderRadius: 8 }}
          />
        </View>
      </View>

      <View>
        <CustomButton title="Post" customStyle={styles.forbutton} />
      </View>
    </View>
  );
};

export default Photos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  // text: {
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   color: "white",
  // },
  heading: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
  },

  iconContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    width: 80,
    height: 80,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "blue",
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    alignItems: "center",
  },

  Container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 18,
    marginLeft: 28,
  },
  both: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  forbutton: {
    marginTop: 450,
  },
  forback: {
    margin: 30,
  },
});
