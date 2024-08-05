import React, { useState } from "react";
import { View, Text, FlatList, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () => {
  return (
    <View>
      <SafeAreaView>
        <Text>Chat Screen</Text>
      </SafeAreaView>
    </View>
  );
};

const Hexagon = () => {
  return (
    <View style={styles.hexagon}>
      <View style={styles.hexagonInner} />

      <View style={styles.hexagonBefore} />
      <Text>Chat Screen</Text>
      <View style={styles.hexagonAfter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 90,
  },
});
export default Chat;
