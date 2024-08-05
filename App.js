import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Homepage from "./screens/Homepage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import Splashscreen from "./components/Splashscreen";
import React, { useState, useEffect } from "react";
import Landingpage from "./screens/Landingpage";
import Photos from "./screens/Photos";
import HomeScreen from "./screens/Homescreen";
import PetDetails from "./screens/PetDetails";
import Camera from "./screens/Camera";
const Stack = createNativeStackNavigator();

export default function App() {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 3000);
  }, []);

  if (isShowSplashScreen) {
    return (
      <View style={styles.container}>
        <Splashscreen />
      </View>
    );
  }
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landingpage">
        <Stack.Screen
          name="Landingpage"
          component={Landingpage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Homescreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PetDetails"
          component={PetDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Photos"
          component={Photos}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    /* <Stack.Screen name="Home" component={BottomTabNavigation} /> */

    /* <Stack.Screen name="Home" component={Homepage} /> */

    /* <Stack.Screen name="Login" component={Login} /> */
    /* <Stack.Screen name="BottomNavigation" component={BottomTabNavigation} /> */

    // <Homepage />
    // <Landingpage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
