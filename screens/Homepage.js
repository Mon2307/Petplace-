import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  VirtualizedList,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import Card from "../components/Card";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Chips from "../components/Chips";
import Chipscomp from "../components/Chipscomp";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

const filter = () => {
  const [chipsdata, setchipsdata] = useState([
    {
      id: 1,
      name: "10 Kms",
    },
    {
      id: 1,
      name: "25 Kms",
    },
    {
      id: 1,
      name: "50 kms",
    },
    {
      id: 1,
      name: "100 kms",
    },
    {
      id: 1,
      name: "Custom",
    },
  ]);

  return (
    <View>
      <Modal>
        <Text>In modal</Text>
      </Modal>
    </View>
  );
};

const onClickOfSearch = () => {
  return (
    <View>
      <filter />
    </View>
  );
};

const Homepage = ({}) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [placeName, setPlaceName] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    const fetchPlaceName = async () => {
      if (location) {
        const apiKey = "AIzaSyBDL0LKxMcBXvgdUrCFhw50GemjXmnmghw";
        const lat = location.coords.latitude;
        console.log("lat", lat);

        const lon = location.coords.longitude;
        console.log("lon", lon);

        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`
          );
          const data = await response.json();
          if (data.status === "OK" && data.results.length > 0) {
            console.log("data", data.results[0]);
            const name = data.results[0].formatted_address;
            console.log("name", name);
            const addressParts = name.split(",");

            console.log("addressParts", addressParts);
            const simplifiedAddress = addressParts.slice(0, 10).join(",");
            // Remove unnecessary parts (customize this logic as needed)
            // const simplifiedAddress = `${
            //   addressParts[0]
            // }, ${addressParts[1].trim()}`;
            setPlaceName(simplifiedAddress);
          } else {
            throw new Error("Unable to fetch place name");
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchPlaceName();
    console.log("placeName", placeName);
  }, [location]);

  const navigation = useNavigation();

  const onClickOfList = (pet) => {
    // navigation.navigate("PetDetails", { pet, image });
    navigation.navigate("PetDetails", { passedPet: pet });
  };
  // const onClickOfList = (pet) => {
  //   navigation.navigate(PetDetails, { pet });
  // };

  const [listdata, setListData] = useState([
    {
      id: 1,
      name: "Oreo",
      type: "Dog",
      race: "Shih Tzu",
      Gender: "Male",
      Distance: "5",
      Age: "2",
      weight: "2",
      url: require("../assets/Images/oreo.png"),
      adopt: "For Adoption",
      description:
        " Oreo is a male CavaChon that was brought from petland and is microchipped. He’s very loving and has a lot of energy. Oreo is potty trained but still needs some more training. He has all his papers and vaccinations.",
    },
    // { name: 'Oreo', type: 'Dog', race: 'Shih Tzu', Gender: 'Male', Distance: '5', Age: '2' },
    {
      id: 2,
      name: "Prini",
      type: "Dog",
      race: "Boxer",
      Gender: "Female",
      Distance: "3",
      Age: "2",
      weight: "4",
      url: require("../assets/Images/prini.png"),
      adopt: "18000",
      description:
        " Prini is a male CavaChon that was brought from petland and is microchipped. He’s very loving and has a lot of energy. Prini is potty trained but still needs some more training. He has all his papers andvaccinations.",
    },
    {
      id: 3,
      name: "Zoyi",
      type: "Dog",
      race: "Boxer",
      Gender: "Male",
      Distance: "5",
      Age: "2",
      weight: "3",
      url: require("../assets/Images/zoyi.png"),
      adopt: "For Adoption",
      description:
        " Zoyi is a male CavaChon that was brought from petland and is microchipped. He’s very loving and has a lot of energy. Zoyi is potty trained but still needs some more training. He has all his papers andvaccinations.",
    },
  ]);
  return (
    <View style={styles.container}>
      {/* <ScrollView nestedScrollEnabled={true} style={{ width: "100%" }}> */}
      <ScrollView>
        <Header location={placeName} />
        <Searchbar />
        <Chips />

        <FlatList
          data={listdata}
          keyExtractor={(item) => item.id}
          // renderItem={({ item }) => <Card cardData={item} />}
          // onPress={onClickOfList(item)}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onClickOfList(item)}>
              <Card cardData={item} />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    marginBottom: 90,
  },
});
