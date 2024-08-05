import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Badge } from "react-native-elements";

const SpecificIcon = ({
  isFocused,
  iconforActive,
  iconforPassive,
  IconComponent,
  showBadge,
}) => {
  return (
    <View style={styles.defaultIcon}>
      <IconComponent
        name={isFocused ? iconforActive : iconforPassive}
        size={30}
        // color={isFocused ? "blue" : "black"}
      />
      {showBadge && (
        <View style={styles.badgeContainer}>
          <View style={styles.badge} />
        </View>
      )}
    </View>
  );
};
function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const iconforActive = options.iconActive;
        const iconforPassive = options.iconPassive;
        const IconComponent = options.IconComponent;
        const showDot = options.showBadge;

        console.log("iconforActive", iconforActive);

        console.log("iconforPassive", iconforPassive);
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            // style={styles.selectedIconContainer}
          >
            {/* <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
              {label}
            </Text> */}
            <View style={isFocused ? styles.selectedIcon : iconforPassive}>
              {/* <Ionicons
                // name={{isFocused ? iconforActive : iconforPassive }}
                name={isFocused ? iconforActive : iconforPassive}
                size={30}
              /> */}

              <SpecificIcon
                isFocused={isFocused}
                iconforActive={iconforActive}
                iconforPassive={iconforPassive}
                IconComponent={IconComponent} // Pass the IconComponent
                showBadge={showDot}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;
// ...

{
  /* <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
  {...}
</Tab.Navigator> */
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // borderWidth: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#DDE7F0",
    height: 80,
    position: "absolute",
    bottom: 10,
    right: 16,
    left: 16,
  },
  selectedIconContainer: {
    padding: 10,
  },
  selectedIcon: {
    backgroundColor: "white",
    // padding: 16,
    borderRadius: 100,
    // position: "relative",
  },
  defaultIcon: {
    padding: 10,
    position: "relative",
  },
  badgeContainer: {
    position: "absolute",
    top: 6,
    right: 8,
    width: 10,
    height: 10,
    borderRadius: 8,
    backgroundColor: "black", // Black color for the badge background
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: "black", // Black color for the badge
  },
});
