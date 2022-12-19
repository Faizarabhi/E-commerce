import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { Animated, Dimensions } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

const SCREEN_WIDTH = Dimensions.get("window").width;

const CardItem = (props) => {
  const leftSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 10],
      extrapolate: "clamp",
    });
    return (
      <TouchableOpacity activeOpacity={0.6} onPress={props.handleDelete}>
        <View style={styles.deleteBox}>
          <AntDesign name="delete" size={24} color="red" />

          {/* <Animated.View
            style={{ transform: [{ scale: scale }] }}
          ></Animated.View> */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={leftSwipe}>
      <View style={styles.container}>
        <View style={styles.product}>
          <Image style={styles.image} source={{ uri: props.data.image }} />
          <View style={styles.detail}>
            <Text style={styles.titleText}>{props.data.title}</Text>
            <Text style={styles.descriptionText}>{props.data.description}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.price}>{props.data.price}€</Text>
        </View>
      </View>
    </Swipeable>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  product: {
    height: 120,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
    borderColor: 'white'
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 20,
    backgroundColor: "gray",
    borderWidth: 0.5,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
    bottom: 20,
  },
  delete: {
    backgroundColor: "#eee",
    width: "100%",
  },
  deleteBox: {
    height: 100,
    width: 70,
    backgroundColor: "#f6f6f6",
    justifyContent : 'center',
    alignItems: 'center',
    width: 80
  },
});
