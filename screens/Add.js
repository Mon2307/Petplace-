import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import Chipscomp from "../components/Chipscomp";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Inputs from "../components/Inputs";
import Switch from "../components/Switch";
import CustomButton from "../components/Commonbutton";
const Add = ({ navigation }) => {
  const onClickOfButton = () => {
    console.log("Clicked");
    navigation.navigate("Photos");
  };
  return (
    <ScrollView style={styles.container}>
      <View>
        <SafeAreaView>
          <View style={styles.heading}>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 22 }}>
              Put Up for Adoption
            </Text>
            <Text>Step 1 of 2</Text>
          </View>
        </SafeAreaView>
        <View style={styles.forboth}>
          <View>
            <Text style={styles.textheading}>Category</Text>
          </View>
          <View>
            <Button />
          </View>
        </View>
        <View style={styles.forboth}>
          <View>
            <Text style={styles.textheading}>Breed</Text>
          </View>
          <View>
            <Dropdown />
          </View>
        </View>

        <View style={styles.forboth}>
          <View>
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 16,
                marginTop: 28,
                marginLeft: 10,
              }}
            >
              Age
            </Text>
          </View>
          <View style={styles.forage}>
            <View>
              <Inputs title={"Year(s)"} />
            </View>
            <View>
              <Inputs title={"Month(s)"} />
            </View>
          </View>
        </View>

        <View style={styles.forboth}>
          <View>
            <Text style={styles.textheading}>Gender</Text>
          </View>
          <View>
            <Switch />
          </View>
        </View>

        <View style={styles.forboth}>
          <View>
            <Text style={styles.textheading}>Price</Text>
          </View>

          <View>
            <TextInput style={styles.textinput} placeholder=" ₹ 00"></TextInput>
          </View>
        </View>
        <View style={styles.forboth}>
          <View>
            <Text style={styles.textheading}>Name</Text>
          </View>

          <View>
            <TextInput
              style={styles.textinput}
              placeholder=" Title "
            ></TextInput>
          </View>
        </View>
        <View style={styles.forboth}>
          <View>
            <Text style={[styles.textheading]}>Description</Text>
          </View>

          <View>
            <TextInput
              style={[styles.textinput, { height: 90, marginBottom: 14 }]}
              placeholder=" Description "
            ></TextInput>
          </View>
        </View>
      </View>

      <View>
        <View>
          <CustomButton title={"Add Photos"} onPress={onClickOfButton} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    marginBottom: 90,
  },

  heading: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 20,
  },
  forboth: {
    flexDirection: "column",
    marginLeft: 20,
    gap: 14,
    justifyContent: "center",
  },

  forage: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  textheading: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 9,
    marginTop: 10,
  },

  textinput: {
    width: 320,
    // backgroundColor: "hsla(0, 0%, 85%, 0.2)",
    backgroundColor: "white",
    // borderWidth: 2,
    height: 50,
    marginLeft: 18,
    borderRadius: 18,
    shadowColor: "#7462FF",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingLeft: 30,
    paddingTop: 0,
  },

  destextinput: {},
});
