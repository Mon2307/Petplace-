import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import { CameraView, useCameraPermissions, CameraType } from "expo-camera";

import { useIsFocused } from "@react-navigation/native";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Camera = () => {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [image, setImage] = useState(null);
  const [camera, setCamera] = useState(null);
  const isFocused = useIsFocused();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const takePicture = async () => {
    if (camera) {
      console.log("In takepicturefn");
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
    }
    // return (
    //   <View>
    //     {image && (
    //       <Image source={{ uri: image }} style={styles.forclickedphoto} />
    //     )}
    //   </View>
    // );
  };

  function toggleCameraFacing() {
    console.log("In function");
    console.log("facing", facing);
    let current = facing;
    console.log("current", current);

    setFacing((current) => (current === "back" ? "front" : "back"));
    // setFacing((current) =>
    //   current === CameraView.Constants.Type.back
    //     ? CameraView.Constants.Type.front
    //     : CameraView.Constants.Type.back
    // );
    console.log("facing", facing);
  }

  return (
    <View style={styles.container}>
      {isFocused && (
        <CameraView
          style={styles.camera}
          // CameraType={facing}
          facing={facing}
          ref={(ref) => setCamera(ref)}
        >
          <View style={styles.buttonContainer}>
            {/* <TouchableOpacity
              style={styles.button}
              onPress={toggleCameraFacing}
            >
              <Text style={styles.text}>Click Picture</Text>
            </TouchableOpacity> */}
            <View>
              {image && (
                <Image source={{ uri: image }} style={styles.forclickedphoto} />
              )}
            </View>
            <View>
              <TouchableOpacity style={styles.button} onPress={takePicture}>
                {/* <Text style={styles.text}>Take</Text> */}
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={toggleCameraFacing}>
                <MaterialCommunityIcons
                  name={"camera-flip"}
                  size={34}
                  color={"white"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </CameraView>
      )}
    </View>
  );
};
export default Camera;

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
    marginTop: 650,
    // marginLeft: 20,
    justifyContent: "space-around",
    // gap: 12,
    alignItems: "center",
  },
  button: {
    // flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 100,
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  forclickedphoto: {
    // flex: 1,
    // justifyContent: "center",
    width: 100,
    height: 100,
    // marginTop: 600,
    // marginLeft: 0,
  },
});
