import React from "react";
import { Image, TouchableOpacity, View, Animated, Dimensions, StyleSheet, Share , Text, StatusBar, Linking, Platform} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {images} from '../constants';

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * .56;
const DOT_SIZE = 5;
const DOT_SPACING = 5;
const DOT_INDICATOR = DOT_SIZE + DOT_SPACING;

const Slider = () => {
    const scrollY = React.useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container} >
            <StatusBar hidden/>
            <View style={{ height: ITEM_HEIGHT, overflow: 'hidden' }} >
                <Animated.FlatList
                    data={images}
                    keyExtractor={(_,index)=> index.toString()}
                    snapToInterval={ITEM_HEIGHT}
                    decelerationRate="fast"
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: {contentOffset: { y :scrollY }} }],
                        { useNativeDriver: true }
                    )}
                    renderItem={({item})=>{
                        return (
                            <View>
                                <Image source={{ uri: item }} style={styles.image} />
                            </View>
                        )
                    }}
                />
                <View style={styles.pagination} >
                    {images.map((_,index) => {
                        return <View
                            key={index}
                            style={[styles.dot]}
                        />
                    })}
                     <Animated.View
                        style={[styles.dotIndicator, {
                            transform: [{
                                translateY: Animated.divide(scrollY, ITEM_HEIGHT).interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, DOT_INDICATOR ]
                                })
                            }] 
                        }]}
                    />
                </View>
            </View>
        </View>
    )
}

export default Slider;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        resizeMode: 'recover'
    },
    pagination: {
        position: 'absolute',
        top: ITEM_HEIGHT / 2,
        right: 20,
    },
    dot:{
        width: DOT_INDICATOR,
        height: DOT_INDICATOR,
        borderRadius: 0,
        borderWidth: 1.5,
        borderColor: '#333',
        top: -DOT_SIZE/ 4,
        right: 0,
        marginBottom: 2,
    },
    dotIndicator: {
        width: DOT_INDICATOR,
        height: DOT_INDICATOR,
        borderRadius: 0,
        borderWidth: 1.5,
        backgroundColor: '#333',
        position: 'absolute',
        top: 0,
        // right: 2,
        marginBottom: 8,
    },
  
})