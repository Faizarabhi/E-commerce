import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import dote from '../../assets/dote.json'
const CustomButton = ({ showButton }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          showButton("124");
        }}
      >
        {/* <Text style={styles.text}>Add to bag</Text> */}
        <Text style={styles.text}><Image source={{ dote }} style={styles.image} /></Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
    padding: 15,
    margin: 10,
    justifyContent: "flex-end",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default CustomButton;
