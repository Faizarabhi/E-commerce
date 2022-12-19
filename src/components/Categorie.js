import React from "react";
import { Text, View, StyleSheet, Animated, TouchableOpacity} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import {Colors} from '../constants';
const Categorie = () => {

    return(
        <View style={styles.container}>
            <View style={styles.first}>
                <Text>NYFORS</Text>
                <FontAwesome5 name="heart" size={24} color="black" />
            </View>
                <Text style={styles.title}>Work lamp with LED bulb</Text>
                <Text style={styles.price}>€120</Text>
                <View style={styles.colors}>
                <View style={styles.color}>
                </View>
                <View style={styles.color}>
                </View>
                <View style={styles.color}>
                </View>
                    {/* <Animated.FlatList
                    data= {Colors}
                    keyExtractor={(_,index)=> index.toString()}
                    renderItem={({item})=>{
                        return (
                            <View style={styles.color}>
                            </View>
                       )}}/> */}
            </View>
                </View>
       
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
    },
    first: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title : {
        fontWeight: 'bold',
        fontSize: 25,
    },
    colors:{
        flexDirection: 'row',
        marginTop: 16,
        

    },
    price:{
        fontSize: 20
    },
    color:{
        backgroundColor: '#7ee',
        borderRadius:100,
        padding: 20,
        alignSelf: "flex-start",
        borderWidth: 2,
        borderColor: "black",
        margin: 4
    }

})
export default Categorie