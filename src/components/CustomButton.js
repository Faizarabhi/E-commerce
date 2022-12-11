import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
const  CustomButton = ()=>{
    const onPress = () => {};
    
    return (
        <View >
         <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
    <Text style={styles.text}>Add to bag</Text>
    
      </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
   
    button: {
      alignItems: "center",
      backgroundColor: "#000",
      padding: 10,
      borderRadius:10,
      padding: 15,
      margin: 10,
      justifyContent: 'flex-end',
      
    },
    text:{
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20
    },
  });
export default CustomButton