import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
  StyleSheet,
  Share,
  Text,
  StatusBar,
  Linking,
  ScrollView,
  FlatList,
} from "react-native";
import { CardItem } from "../components";
const { width, height } = Dimensions.get("screen");
import { card } from "../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CustomButton } from "../components";
const Stock = ({ closeBottom }) => {
  const [lists, setLists] = useState(card);

  const deleteItem = (index) => {
    const arr = [...lists];
    arr.splice(index, 1);
    setLists(arr);
  };
  const show = () => {
    refRBSheet.current.close();
  };
  return (
    <ScrollView>
      <View style={styles.head}>
        <View />
        <Text style={styles.bag}>Bag</Text>
        <TouchableOpacity
          style={[styles.bag, { left: 44 }]}
          onPress={closeBottom}
        >
          <MaterialCommunityIcons name="window-close" size={25} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={lists}
        nestedScrollEnabled
        renderItem={({ item, index }) => {
          return (
            <CardItem data={item} handleDelete={() => deleteItem(index)} />
          );
        }}
      />
      <CustomButton style={styles.footer} showButton={show} />
    </ScrollView>
  );
};

export default Stock;

const styles = StyleSheet.create({
  head: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "gray",
    borderBottomWidth: 0.3,
    paddingVertical: 5,
  },
  bag: {
    fontSize: 21,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "500",
    left: "52%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  price: {
    fontSize: 20,
  },
  image: {
    borderRadius: 30,
    width: 100,
    resizeMode: "cover",
    height: 100,
    rounded: 10,
    backgroundColor: "black",
  },
  product: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 2,
    borderTopColor: "#eee",
    paddingTop: 24,
    borderBottomColor: "#eee",
    paddingBottom: 24,
  },
  footer: {
    flex: 1,
    bottom:0,
    backgroundColor: 'red'
  }
});
