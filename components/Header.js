import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
const Header = ({ location }) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image
          source={require("../assets/Images/location.png")}
          style={{ width: 40, height: 40 }}
        />
        <Text style={styles.textHeader}>{location} </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-evenly",
    alignItems: "center",

    marginTop: 45,
    // marginRight: 5,
    padding: 26,
  },
  textHeader: {
    fontSize: 14,
    // fontWeight: 'bold',
  },
});

export default Header;
