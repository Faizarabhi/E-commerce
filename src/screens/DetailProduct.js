import React, { useRef } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Header, Slider, CustomButton, Categorie, Stock } from "../components";
import { MaterialIcons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
const { width, height } = Dimensions.get("screen");

const DetailProduct = () => {
  const refRBSheet = useRef();

  const show = () => {
    refRBSheet.current.open();
  };
  const close = () => {
    refRBSheet.current.close();
  };

  return (
    <SafeAreaView style={styles.container}>
      <RBSheet
        ref={refRBSheet}
        height={height / 2}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <Stock closeBottom={close} />
      </RBSheet>
      <Header />
      <Slider />
      <Categorie />
      <CustomButton showButton={show} />
    </SafeAreaView>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  categoriesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
});
