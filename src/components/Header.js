import React from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { Feather } from '@expo/vector-icons'; 


const Header = () => {

    return (
        <View style={styles.headerContainer} >
            <TouchableOpacity>
                <Feather name="menu" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.logo} >Logo</Text>
            <TouchableOpacity>
                <Feather name="shopping-cart" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: '5%'
    },
    logo:{
        fontSize: 22,
        fontWeight: '600',
    }
})