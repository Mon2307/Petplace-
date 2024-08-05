import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Add from "../screens/Add";
import User from "../screens/User";
import Homepage from "../screens/Homepage";
import Icons from "react-native-vector-icons/FontAwesome";
import Favourites from "../screens/favourites";
import Chat from "../screens/chat";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import MyTabBar from "../components/TabBar";
const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  // tabBarStyle: {
  //   position: "absolute",
  //   bottom: 0,
  //   right: 0,
  //   left: 0,
  //   elevation: 0,
  //   height: 100,
  // },
};

const tabArray = [
  {
    key: 1,
    name: "Explore",
    component: Homepage,
    options: {
      tabBarLabel: "Explore",
      iconActive: "home",
      iconPassive: "home-outline",
      IconComponent: Ionicons,
    },
  },
  {
    key: 2,
    name: "Chat",
    component: Chat,
    options: {
      tabBarLabel: "Chat",
      iconActive: "chatbox",
      iconPassive: "chatbox-outline",
      IconComponent: Ionicons,
    },
  },
  {
    key: 3,
    name: "Add",
    component: Add,
    options: {
      tabBarLabel: "Add",
      iconActive: "add-circle",
      iconPassive: "add-circle",
      IconComponent: Ionicons,
    },
  },
  {
    key: 4,
    name: "Favourites",
    component: Favourites,
    options: {
      tabBarLabel: "Favourites",
      iconActive: "heart",
      iconPassive: "heart-outline",
      IconComponent: Ionicons,
    },
  },
  {
    key: 5,
    name: "User",
    component: User,
    options: {
      tabBarLabel: "User",
      iconActive: "person",
      iconPassive: "person-outline",
      IconComponent: Ionicons,
    },
  },
];

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBar={(props) => <MyTabBar {...props} />}
      style={{ backgroundColor: "Black" }}
    >
      {tabArray.map((tab) => (
        <Tab.Screen
          key={tab.key}
          name={tab.name}
          component={tab.component}
          options={tab.options}
        />
      ))}
    </Tab.Navigator>
    // <Tab.Navigator screenOptions={screenOptions}>
    //   <Tab.Screen
    //     name="Explore"
    //     component={Homepage}
    //     options={{
    //       tabBarIcon: ({ focused }) => {
    //         return (
    //           <Ionicons
    //             name={focused ? "home" : "home-outline"}
    //             size={32}
    //             color={focused ? "blue" : "black"}
    //           />
    //         );
    //       },
    //       headerShown: false,
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Chat"
    //     component={Chat}
    //     options={{
    //       tabBarIcon: ({ focused }) => {
    //         return (
    //           <Ionicons
    //             name={focused ? "chatbox" : "chatbox-outline"}
    //             size={32}
    //             color={focused ? "blue" : "black"}
    //           />
    //         );
    //       },
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Add"
    //     component={Add}
    //     options={{
    //       tabBarIcon: ({ focused }) => {
    //         return <Ionicons name="add-circle" size={32} color="blue" />;
    //       },
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Favourites"
    //     component={Favourites}
    //     options={{
    //       tabBarIcon: ({ focused }) => {
    //         return (
    //           <Ionicons
    //             name={focused ? "heart" : "heart-outline"}
    //             size={32}
    //             color={focused ? "blue" : "black"}
    //           />
    //         );
    //       },
    //     }}
    //   />
    //   <Tab.Screen
    //     name="User"
    //     component={User}
    //     options={{
    //       tabBarIcon: ({ focused }) => {
    //         return (
    //           <Ionicons
    //             name={focused ? "person" : "person-outline"}
    //             size={32}
    //             color={focused ? "blue" : "black"}
    //           />
    //         );
    //       },
    //     }}
    //   />
    // </Tab.Navigator>
  );
};

export default BottomTabNavigation;
