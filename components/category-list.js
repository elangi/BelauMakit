import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image, FlatList, Platform, TouchableNativeFeedback} from 'react-native';

const CategoryList = props => {
    let TouchableComp = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >=21) {
        TouchableComp = TouchableNativeFeedback;
    }
    return(
        <View style={styles.category}>
            <TouchableComp
                style={{flex:1}}
                onPress={props.onSelect}>
                <View style={{...styles.container}}>
                    <Image style={styles.image} source={props.image} />
                    <Text style={styles.title} numberOfLines={8}>{props.title}</Text>
                    <Text style={styles.idk} numberOfLines={2}>{props.location}</Text>
                </View>
            </TouchableComp>
        </View>
    );
};

const styles = StyleSheet.create({
    category: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: '#111',
        shadowOpacity: 0,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default CategoryList;