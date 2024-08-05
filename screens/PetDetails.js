import React, { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import CustomButton from "../components/Commonbutton";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Ionicons, Entypo } from "@expo/vector-icons";

// import Carousel from "react-native-reanimated-carousel";
// import Carousel, { Pagination } from "react-native-snap-carousel";

const SLIDER_WIDTH = Dimensions.get("window").width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const getImageUrl = (key) => {
  // Your logic to map the key to the corresponding image URL
  // For example:
  switch (key) {
    case 33:
      return require("../assets/Images/oreo.png");
    case 34:
      return require("../assets/Images/prini.png");
    case 35:
      return require("../assets/Images/zoyi.png");
    default:
      return require("../assets/Images/default.jpg"); // Default image URL if key doesn't match
  }
};

const PetDetails = ({ route, navigation }) => {
  const { passedPet } = route.params;
  console.log(passedPet);
  const ImageURL = getImageUrl(passedPet.url);

  const isAdoption = passedPet.adopt === "For Adoption";

  // Define styles for different scenarios
  const textStyle = isAdoption ? styles.adoptionText : styles.defaultText;

  const data = [
    {
      // imgUrl: "https://picsum.photos/id/11/200/300",
      // imgUrl: imageUrl,
      imgUrl: ImageURL,
    },
    {
      imgUrl: require("../assets/Images/default.jpg"),
      // imgUrl: ImageURL,
    },
    // {
    //   imgUrl: "https://picsum.photos/id/12/200/300",
    // },
  ];

  const CarouselCardItem = ({ item, index }) => {
    return (
      <View style={styles.container} key={index}>
        {/* <Image source={{ uri: item.imgUrl }} style={styles.image} /> */}

        <Image source={item.imgUrl} style={styles.image} />
      </View>
    );
  };
  const isCarousel = useRef(null);
  // const [index, setIndex] = React.useState(0);
  const [index, setIndex] = useState(0);
  return (
    <ScrollView>
      {/* <View style={styles.imagecontainer}>
            <Image
              source={require("../assets/Images/oreo.png")}
              style={{ width: 100, height: 100, margin: 40 }}
            />
          </View> */}
      <SafeAreaView style={styles.carouselContainer}>
        <Carousel
          layout="stack"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
          onSnapToItem={(index) => setIndex(index)}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: "rgba(0, 0, 0, 0.92)",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </SafeAreaView>

      <View style={styles.textcontainer}>
        <View style={styles.nameandtype}>
          <View style={styles.typeanddot}>
            <Text>CavaChon </Text>
            <Entypo name="dot-single" size={22} color="Grey" />
            <Text>{passedPet.type}</Text>
          </View>
          <Text style={styles.name}>{passedPet.name}</Text>
        </View>
        <View style={styles.nameandtype}>
          <Text style={{ color: "#555555" }}>
            Distance : {passedPet.Distance} KM
          </Text>
          <Text style={textStyle}>{passedPet.adopt}</Text>
        </View>
      </View>
      <View style={styles.hexagoncontainer}>
        <View style={styles.hexAndText}>
          <Image
            source={require("../assets/Images/hexagon.png")}
            style={styles.imageHex}
          />
          <View style={styles.placetext}>
            <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
              {passedPet.Age}
            </Text>
            <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>month</Text>
          </View>
          <Text style={{ fontWeight: "bold" }}>Age</Text>
        </View>

        <View style={styles.hexAndText}>
          <Image
            source={require("../assets/Images/hexagon.png")}
            style={styles.imageHex}
          />
          <View style={styles.placetext}>
            <Text
              style={{ color: "#FFFFFF", fontWeight: "bold", marginTop: 10 }}
            >
              {passedPet.Gender}
            </Text>
          </View>
          <Text style={{ fontWeight: "bold" }}>Gender</Text>
        </View>

        <View style={styles.hexAndText}>
          <Image
            source={require("../assets/Images/hexagon.png")}
            style={styles.imageHex}
          />
          <View style={styles.placetext}>
            <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
              {passedPet.weight}
            </Text>
            <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>Kg</Text>
          </View>
          <Text style={{ fontWeight: "bold" }}>Weight</Text>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          More about {passedPet.name}
        </Text>
        <Text style={{ color: "grey" }}>{passedPet.description}</Text>
      </View>
      <View>
        <CustomButton title={"Login For Enquiry"} />
      </View>
      <View></View>
    </ScrollView>
    // </ScrollView>
    // </View>
  );
};

export default PetDetails;

const styles = StyleSheet.create({
  // imagecontainer: {
  //   backgroundColor: "#7757FF33",
  //   borderRadius: 8,
  //   padding: 30,
  //   margin: 20,
  //   shadowColor: "#000",
  // },

  imageHex: {
    width: 62,
    height: 62,
    margin: 20,
  },
  textcontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    // width: 160,
    // height: 10,
  },

  hexagoncontainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 6,
    margin: 20,
    shadowColor: "#000",
    flexDirection: "row",
    // justifyContent: "space-around",
  },

  hexAndText: {
    flexDirection: "column",
    alignItems: "center",
  },

  description: {
    margin: 20,
    padding: 5,
  },

  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    // paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    alignContent: "center",
    marginBottom: 10,
  },
  image: {
    width: (ITEM_WIDTH * 3) / 4 + 20,
    height: 300,
    // marginTop: 10,
    margin: 20,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  // body: {
  //   color: "#222",
  //   fontSize: 18,
  //   paddingLeft: 20,
  //   paddingLeft: 20,
  //   paddingRight: 20,
  // },
  carouselContainer: {
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 35,
    // marginBottom: 20,
  },
  colorAdopt: {
    color: "lightgreen",
  },

  adoptionText: {
    color: "#1AD671",
    fontWeight: "bold",
  },
  defaultText: {
    color: "#D61A71",
    fontWeight: "bold",
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
  },
  typeanddot: {
    flex: 1,
    flexDirection: "row",
  },
  nameandtype: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  placetext: {
    position: "absolute",
    zIndex: 1,
    top: 28,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
