import React from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";

export default function Splashscreen() {
  return (
    <ImageBackground
      source={require("../assets/Images/background2.png")}
      style={styles.background}
    >
      <Image
        source={require("../assets/Images/Furryfriends.png")}
        style={{ width: 220, height: 100, margin: 40 }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ffffff',
    alignItems: "center",
    justifyContent: "center",
  },

  background: {
    flex: 1,
    justifyContent: "center",
    // width: 300,
  },
});
