import React, { useState } from "react";
import { View, Text, FlatList, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Favourites = () => {
  return (
    <View>
      <SafeAreaView>
        <Text>Favourite Screen</Text>
      </SafeAreaView>
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    marginBottom: 90,
  },
});
