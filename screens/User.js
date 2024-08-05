import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const data = [
  { id: 1, iconname: "verified-user", text: "Verification" },
  { id: 2, iconname: "settings", text: "Setting" },
  { id: 3, iconname: "lock", text: "Change Password" },
  { id: 4, iconname: "share", text: "Refer a friend" },
];

const List = ({ content }) => {
  return (
    <View style={styles.both}>
      <View style={styles.bottomcontainer}>
        <View>
          <MaterialIcons
            name={content.iconname}
            size={32}
            // padding={4}
            // backgroundColor={"grey"}
            // borderRadius={32}
          />
        </View>
        <View>
          <Text>{content.text}</Text>
        </View>
      </View>
      <View>
        <MaterialIcons name="keyboard-arrow-right" size={32} />
      </View>
    </View>
  );
};

const User = ({ navigation }) => {
  const onClickOfBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.containerr}>
      <SafeAreaView>
        {/* <Text>User Screen</Text> */}
        <TouchableOpacity onPress={() => onClickOfBack()}>
          <View style={styles.forback}>
            <Ionicons name={"arrow-back"} size={34} />
          </View>
        </TouchableOpacity>
        <View style={styles.container}>
          <View>
            <TouchableOpacity>
              <Image
                source={require("../assets/Images/shikamaru.jpg")}
                style={{ width: 140, height: 140, borderRadius: 120 }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
              Name
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, color: "Grey", fontStyle: "italic" }}>
              Username
            </Text>
          </View>
          <View>
            {/* <Button title="Learn More" color="grey"></Button> */}

            <TouchableOpacity style={styles.forbutton}>
              <Text style={{ color: "white" }}>Edit profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.listcontainer}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <List content={item} />
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  containerr: {
    marginBottom: 100,
  },
  container: {
    // flex: 1,
    flexDirection: "column",
    alignItems: "center",
    margin: 20,
    gap: 8,
  },

  forbutton: {
    backgroundColor: "#7462FF",
    padding: 12,
    borderRadius: 8,
  },
  bottomcontainer: {
    flex: 1,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },

  both: {
    flexDirection: "row",
    //
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "white",
    // borderColor: "blue",
    // borderWidth: 3,
  },
  listcontainer: {
    backgroundColor: "white",
    // borderRadius: 34,
    borderTopEndRadius: 34,
    borderTopStartRadius: 34,
    // borderWidth: 8,
    padding: 10,
    // borderWidth: 3,
    marginTop: 32,
    paddingBottom: 32,
  },
  forback: {
    margin: 20,
  },
});
