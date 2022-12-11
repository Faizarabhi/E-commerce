import React from "react";
import { 
    View,
    Text,
    SafeAreaView,
    StyleSheet
} from "react-native";
import { CustomButton, Header, Slider, Categorie } from '../components';

const DetailProduct = () => {

    return (
        <SafeAreaView style={styles.container} >
            <Header  />
            <Slider />
            <Categorie />
            <CustomButton />
        </SafeAreaView>
    )
}

export default DetailProduct;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})